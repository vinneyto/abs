export type Entity = number;
export abstract class Component {}
export type ComponentCtor<T extends Component = Component> = new () => T;
export abstract class Query {
  abstract match(components: Map<ComponentCtor, Component>): boolean;
}
export class Predicate<T extends Component> extends Query {
  constructor(
    private readonly componentClass: ComponentCtor<T>,
    private readonly condition: (c: T) => boolean,
  ) {
    super();
  }
  match(components: Map<ComponentCtor, Component>): boolean {
    const component = components.get(this.componentClass);
    if (component === undefined) {
      return false;
    }
    return this.condition(component as T);
  }
}
export abstract class System<State> {
  public abstract query: Array<ComponentCtor | Query>;
  public abstract update(entity: Entity, state: State): void;
  public updateAll(entities: Set<Entity>, state: State) {
    for (const entity of entities) {
      this.update(entity, state);
    }
  }
  public ecs!: ECS<State>;
}
export type ComponentClass<T extends Component> = new (...args: any[]) => T;
export class ComponentContainer {
  private map = new Map<ComponentCtor, Component>();
  public add(component: Component): void {
    this.map.set(component.constructor as ComponentCtor, component);
  }
  public get<T extends Component>(componentClass: ComponentClass<T>): T {
    return this.map.get(componentClass) as T;
  }
  public has(componentClass: ComponentCtor): boolean {
    return this.map.has(componentClass);
  }
  public hasAll(queries: Iterable<ComponentCtor | Query>): boolean {
    for (let q of queries) {
      if (q instanceof Query) {
        if (!q.match(this.map)) {
          return false;
        }
      } else {
        if (!this.map.has(q)) {
          return false;
        }
      }
    }
    return true;
  }
  public delete(componentClass: ComponentCtor): void {
    this.map.delete(componentClass);
  }
}

export type ComponentProps<T> = Partial<{ [key in keyof T]: T[key] }>;

export class ComponentBuilder<T extends Component = Component> {
  private componentCtor: ComponentCtor<T>;
  private props: ComponentProps<T> = {};

  constructor(Ctor: ComponentCtor<T>) {
    this.componentCtor = Ctor;
  }

  assign(props: ComponentProps<T>) {
    Object.assign(this.props, props);
    return this;
  }

  build(): [ComponentCtor<T>, ComponentProps<T>] {
    return [this.componentCtor, this.props];
  }
}

export function component<T extends Component>(C: new () => T) {
  return new ComponentBuilder(C);
}

export function predicate<T extends Component>(
  componentClass: ComponentCtor<T>,
  condition: (c: T) => boolean,
) {
  return new Predicate(componentClass, condition);
}

export function instantiate<T extends Component>(
  Ctor: ComponentCtor<T>,
  props?: ComponentProps<T>,
) {
  const component = new Ctor();

  if (props) {
    for (const key of Object.keys(props) as Array<keyof T>) {
      if (props[key] !== undefined) {
        component[key] = props[key] as T[keyof T];
      }
    }
  }

  return component;
}

export class ECS<State> {
  private nextEntityID = 1;
  private entitiesToDestroy = new Array<Entity>();
  private entities = new Map<Entity, ComponentContainer>();
  private systems = new Map<System<State>, Set<Entity>>();
  public addEntity(...componentSets: Array<ComponentBuilder[]>): Entity {
    let entity = this.nextEntityID;
    this.nextEntityID++;
    this.entities.set(entity, new ComponentContainer());
    for (const somponentSet of componentSets) {
      for (const component of somponentSet) {
        this.addComponent(entity, ...component.build());
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
  public addComponent<T extends Component>(
    entity: Entity,
    Ctor: ComponentCtor<T>,
    props?: ComponentProps<T>,
  ): T {
    const component = instantiate(Ctor, props);

    this.entities.get(entity)?.add(component);
    this.checkE(entity);
    return component;
  }
  public getComponents(entity: Entity): ComponentContainer {
    return this.entities.get(entity)!;
  }
  public removeComponent(entity: Entity, componentClass: ComponentCtor): void {
    this.entities.get(entity)?.delete(componentClass);
    this.checkE(entity);
  }
  private checkE(entity: Entity): void {
    for (let system of this.systems.keys()) {
      this.checkES(entity, system);
    }
  }
  private checkES(entity: Entity, system: System<State>): void {
    let have = this.entities.get(entity);
    let need = system.query;
    if (have?.hasAll(need)) {
      this.systems.get(system)?.add(entity); // no-op if already has it
    } else {
      this.systems.get(system)?.delete(entity); // no-op if doesn't have it
    }
  }
  public addSystem(system: System<State>): void {
    if (system.query.length == 0) {
      console.warn('System ' + system + ' not added: empty components list.');
      return;
    }
    system.ecs! = this;
    this.systems.set(system, new Set());
    for (let entity of this.entities.keys()) {
      this.checkES(entity, system);
    }
  }
  public removeSystem(system: System<State>): void {
    this.systems.delete(system);
  }
  public update(state: State): void {
    for (let [system, entities] of this.systems.entries()) {
      system.updateAll(entities, state);
    }
    while (this.entitiesToDestroy.length > 0) {
      this.destroyEntity(this.entitiesToDestroy.pop()!);
    }
  }
  public find(
    query: ComponentCtor[],
    predicate: (
      _components: ComponentContainer,
      _entity: Entity,
    ) => boolean = () => true,
  ) {
    for (const [entity, have] of this.entities.entries()) {
      if (have.hasAll(query) && predicate(have, entity)) {
        return entity;
      }
    }
    return undefined;
  }
  public findAll(query: ComponentCtor[]) {
    const entities: Entity[] = [];
    for (const [entity, have] of this.entities.entries()) {
      if (have.hasAll(query)) {
        entities.push(entity);
      }
    }
    return entities;
  }
}
