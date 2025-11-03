export class CypherLearningSettings {
  private _audioDelay = 3;
  private _a1z26 = true;
  private _nato = true;
  private _morse = true;

  set audioDelay(value: number) {
    this._audioDelay = value;
  }
  get audioDelay(): number {
    return this._audioDelay;
  }

  usage(cypherName: string): boolean {
    switch(cypherName) {
      case 'A1Z26':
        return this.a1z26;
      case 'NATO':
        return this._nato;
      case 'Morse':
        return this._morse;        
      default:
        return false;
    }
  }

  set a1z26(value: boolean) {
    this._a1z26 = value;
  }
  get a1z26(): boolean {
    return this._a1z26;
  }
  set nato(value: boolean) {
    this._nato = value;
  }
  get nato(): boolean {
    return this._nato;
  }
  set morse(value: boolean) {
    this._morse = value;
  }
  get morse(): boolean {
    return this._morse;
  }  
}
