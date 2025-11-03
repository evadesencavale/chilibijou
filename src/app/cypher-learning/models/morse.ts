import { Cypher } from "./cypher";
import { Translation } from "./translation";

export class Morse extends Cypher {
  readonly codeVolume = .6;
  constructor() {
      super('Morse', 'assets/cypher/morse/Morse.mp3', 3);
      this._testLetterToCode = true;
      this._testCodeToLetter = true;
      this._translations.push(new Translation("A", "Alfa", 'assets/cypher/letters/A.mp3', 'assets/cypher/morse/A.ogg', this.codeVolume));
      this._translations.push(new Translation("B", "Bravo", 'assets/cypher/letters/B.mp3', 'assets/cypher/morse/B.ogg', this.codeVolume));
      this._translations.push(new Translation("C", "Charlie", 'assets/cypher/letters/C.mp3', 'assets/cypher/morse/C.ogg', this.codeVolume));
      this._translations.push(new Translation("D", "Delta", 'assets/cypher/letters/D.mp3', 'assets/cypher/morse/D.ogg', this.codeVolume));
      this._translations.push(new Translation("E", "Echo", 'assets/cypher/letters/E.mp3', 'assets/cypher/morse/E.ogg', this.codeVolume));
      this._translations.push(new Translation("F", "Foxtrot", 'assets/cypher/letters/F.mp3', 'assets/cypher/morse/F.ogg', this.codeVolume));
      this._translations.push(new Translation("G", "Golf", 'assets/cypher/letters/G.mp3', 'assets/cypher/morse/G.ogg', this.codeVolume));
      this._translations.push(new Translation("H", "Hotel", 'assets/cypher/letters/H.mp3', 'assets/cypher/morse/H.ogg', this.codeVolume));
      this._translations.push(new Translation("I", "India", 'assets/cypher/letters/I.mp3', 'assets/cypher/morse/I.ogg', this.codeVolume));
      this._translations.push(new Translation("J", "Juliett", 'assets/cypher/letters/J.mp3', 'assets/cypher/morse/J.ogg', this.codeVolume));

      this._translations.push(new Translation("K", "Kilo", 'assets/cypher/letters/K.mp3', 'assets/cypher/morse/K.ogg', this.codeVolume));
      this._translations.push(new Translation("L", "Lima", 'assets/cypher/letters/L.mp3', 'assets/cypher/morse/L.ogg', this.codeVolume));
      this._translations.push(new Translation("M", "Mike", 'assets/cypher/letters/M.mp3', 'assets/cypher/morse/M.ogg', this.codeVolume));
      this._translations.push(new Translation("N", "November", 'assets/cypher/letters/N.mp3', 'assets/cypher/morse/N.ogg', this.codeVolume));
      this._translations.push(new Translation("O", "Oscar", 'assets/cypher/letters/O.mp3', 'assets/cypher/morse/O.ogg', this.codeVolume));
      this._translations.push(new Translation("P", "Papa", 'assets/cypher/letters/P.mp3', 'assets/cypher/morse/P.ogg', this.codeVolume));
      this._translations.push(new Translation("Q", "Quebec", 'assets/cypher/letters/Q.mp3', 'assets/cypher/morse/Q.ogg', this.codeVolume));
      this._translations.push(new Translation("R", "Romeo", 'assets/cypher/letters/R.mp3', 'assets/cypher/morse/R.ogg', this.codeVolume));
      this._translations.push(new Translation("S", "Sierra", 'assets/cypher/letters/S.mp3', 'assets/cypher/morse/S.ogg', this.codeVolume));
      this._translations.push(new Translation("T", "Tango", 'assets/cypher/letters/T.mp3', 'assets/cypher/morse/T.ogg', this.codeVolume));      

      this._translations.push(new Translation("U", "Uniform", 'assets/cypher/letters/U.mp3', 'assets/cypher/morse/U.ogg', this.codeVolume));
      this._translations.push(new Translation("V", "Victor", 'assets/cypher/letters/V.mp3', 'assets/cypher/morse/V.ogg', this.codeVolume));
      this._translations.push(new Translation("W", "Whiskey", 'assets/cypher/letters/W.mp3', 'assets/cypher/morse/W.ogg', this.codeVolume));
      this._translations.push(new Translation("X", "Xray", 'assets/cypher/letters/X.mp3', 'assets/cypher/morse/X.ogg', this.codeVolume));
      this._translations.push(new Translation("Y", "Yankee", 'assets/cypher/letters/Y.mp3', 'assets/cypher/morse/Y.ogg', this.codeVolume));
      this._translations.push(new Translation("Z", "Zulu", 'assets/cypher/letters/Z.mp3', 'assets/cypher/morse/Z.ogg', this.codeVolume));           
  }
}