import { Translation } from "./translation";

export class Cypher  {
  protected _translations: Translation[] = [];

  protected _name: string;
  protected _audioName: string;
  protected _audioVolume = 1;
  protected _delay: number;
  protected _testLetterToCode = true;
  protected _testCodeToLetter = true;

  constructor(name: string, audioName: string, delay: number) {
    this._name = name;
    this._audioName = audioName;
    this._delay = delay;
  }

  get translations(): Translation[] {
    return this._translations;
  }

  get name(): string {
    return this._name;
  }

  get audioName(): string {
    return this._audioName;
  }

  get audioVolume(): number {
    return this._audioVolume;
  }  

  get delay(): number {
    return this._delay;
  }  

  get testLetterToCode(): boolean {
    return this._testLetterToCode;
  }

  get testCodeToLetter(): boolean {
    return this._testCodeToLetter;
  }  

  getByLetter(letter: string) : Translation | undefined {
    return this._translations.find(t => t.letter === letter);
  }

  getByCode(code: string) : Translation | undefined {
    return this._translations.find(t => t.code === code);
  }  

  getRandomTranslation(): Translation {
    return this._translations[Math.floor(Math.random() * this._translations.length)];
  }
}