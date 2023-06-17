export type Entity = number;
export abstract class Component {}
export abstract class System {
  public abstract componentsRequired: Function[];
  public abstract update(entity: Entity): void;
  public updateAll(entities: Set<Entity>) {
    for (const entity of entities) {
      this.update(entity);
    }
  }
  public ecs!: ECS;
}
export type ComponentClass<T extends Component> = new (...args: any[]) => T;
export class ComponentContainer {
  private map = new Map<Function, Component>();
  public add(component: Component): void {
    this.map.set(component.constructor, component);
  }
  public get<T extends Component>(componentClass: ComponentClass<T>): T {
    return this.map.get(componentClass) as T;
  }
  public has(componentClass: Function): boolean {
    return this.map.has(componentClass);
  }
  public hasAll(componentClasses: Iterable<Function>): boolean {
    for (let cls of componentClasses) {
      if (!this.map.has(cls)) {
        return false;
      }
    }
    return true;
  }
  public delete(componentClass: Function): void {
    this.map.delete(componentClass);
  }
}

export class ComponentBuilder<T extends Component = Component> {
  private component: T;

  constructor(C: new () => T) {
    this.component = new C();
  }

  assign(props: Partial<{ [key in keyof T]: T[key] }>) {
    for (const key of Object.keys(props) as Array<keyof T>) {
      if (props[key] !== undefined) {
        this.component[key] = props[key] as T[keyof T];
      }
    }
    return this;
  }

  build() {
    return this.component;
  }
}

export function component<T extends Component>(C: new () => T) {
  return new ComponentBuilder(C);
}

export class ECS {
  private nextEntityID = 0;
  private entitiesToDestroy = new Array<Entity>();
  private entities = new Map<Entity, ComponentContainer>();
  private systems = new Map<System, Set<Entity>>();
  public addEntity(...componentSets: Array<ComponentBuilder[]>): Entity {
    let entity = this.nextEntityID;
    this.nextEntityID++;
    this.entities.set(entity, new ComponentContainer());
    for (const somponentSet of componentSets) {
      for (const component of somponentSet) {
        this.addComponent(entity, component.build());
      }
    }
    return entity;
  }
  public removeEntity(entity: Entity): void {
    this.entitiesToDestroy.push(entity);
  }
  private destroyEntity(entity: Entity): void {
    this.entities.delete(entity);
    for (let entities of this.systems.values()) {
      entities.delete(entity); // no-op if doesn't have it
    }
  }
  public addComponent(entity: Entity, component: Component): void {
    this.entities.get(entity)?.add(component);
    this.checkE(entity);
  }
  public getComponents(entity: Entity): ComponentContainer {
    return this.entities.get(entity)!;
  }
  public removeComponent(entity: Entity, componentClass: Function): void {
    this.entities.get(entity)?.delete(componentClass);
    this.checkE(entity);
  }
  private checkE(entity: Entity): void {
    for (let system of this.systems.keys()) {
      this.checkES(entity, system);
    }
  }
  private checkES(entity: Entity, system: System): void {
    let have = this.entities.get(entity);
    let need = system.componentsRequired;
    if (have?.hasAll(need)) {
      this.systems.get(system)?.add(entity); // no-op if already has it
    } else {
      this.systems.get(system)?.delete(entity); // no-op if doesn't have it
    }
  }
  public addSystem(system: System): void {
    if (system.componentsRequired.length == 0) {
      console.warn('System ' + system + ' not added: empty components list.');
      return;
    }
    system.ecs! = this;
    this.systems.set(system, new Set());
    for (let entity of this.entities.keys()) {
      this.checkES(entity, system);
    }
  }
  public removeSystem(system: System): void {
    this.systems.delete(system);
  }
  public update(): void {
    for (let [system, entities] of this.systems.entries()) {
      system.updateAll(entities);
    }
    while (this.entitiesToDestroy.length > 0) {
      this.destroyEntity(this.entitiesToDestroy.pop()!);
    }
  }
}
