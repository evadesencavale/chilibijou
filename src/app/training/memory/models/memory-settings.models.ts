export class MemorySettings {
  private _premisesCount = 3;
  private _premiseDisplayTime = 5;

  set premiseDisplayTime(value: number) {
    this._premiseDisplayTime = value;
  }
  get premiseDisplayTime(): number {
    return this._premiseDisplayTime;
  }
  set premisesCount(value: number) {
    this._premisesCount = value;
  }
  get premisesCount(): number {
    return this._premisesCount;
  }
}
