import { Translation } from "./translation";

export class Cypher  {
  protected _translations: Translation[] = [];

  get translations(): Translation[] {
    return this._translations;
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

  getRandomAudio(): string {
    var randomTranslation = this.getRandomTranslation();
    console.log(randomTranslation);
    if(Math.random() > 0.5) {
        return randomTranslation.audioLetter;
    }
    else {
        return randomTranslation.audioCode;
    }
  }
}