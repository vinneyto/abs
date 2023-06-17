export class Time {
  private static _currentTime = 0;
  private static _delta = 0;

  public static delta() {
    return this._delta;
  }

  public static deltaSeconds() {
    return this._delta * 0.001;
  }

  public static init() {
    this._currentTime = Date.now();
  }

  public static update() {
    const currentTime = Date.now();
    const delta = currentTime - this._currentTime;
    this._currentTime = currentTime;
    this._delta = delta;
  }
}
