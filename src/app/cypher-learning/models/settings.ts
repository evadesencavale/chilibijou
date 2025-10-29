export class CypherLearningSettings {
  private _audioDelay = 3;
  private _a1z26 = true;

  set audioDelay(value: number) {
    this._audioDelay = value;
  }
  get audioDelay(): number {
    return this._audioDelay;
  }
  set a1z26(value: boolean) {
    this._a1z26 = value;
  }
  get a1z26(): boolean {
    return this._a1z26;
  }
}
