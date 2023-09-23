export class Id {
  private static idCounter = 0;

  public static get() {
    return ++this.idCounter;
  }
}
