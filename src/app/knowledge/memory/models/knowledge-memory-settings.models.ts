export class KnowledgeMemorySettings {
  private _sentencesCount = 3;
  private _sentenceDisplayTime = 5;

  set sentenceDisplayTime(value: number) {
    this._sentenceDisplayTime = value;
  }
  get sentenceDisplayTime(): number {
    return this._sentenceDisplayTime;
  }
  set sentencesCount(value: number) {
    this._sentencesCount = value;
  }
  get sentencesCount(): number {
    return this._sentencesCount;
  }
}
