export class AssociationSettings {
  private _premisesCount = 3;
  private _questionCount = 4;

  set questionCount(value: number) {
    this._questionCount = value;
  }
  get questionCount(): number {
    return this._questionCount;
  }
  set premisesCount(value: number) {
    this._premisesCount = value;
  }
  get premisesCount(): number {
    return this._premisesCount;
  }
}
