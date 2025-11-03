import { Cypher } from "./cypher";
import { Translation } from "./translation";

export class NATO extends Cypher {
  readonly codeVolume = .4;
  constructor() {
      super('NATO', 'assets/cypher/nato/NATO.mp3', 2);
      this._testLetterToCode = true;
      this._testCodeToLetter = false;
      this._translations.push(new Translation("A", "Alfa", 'assets/cypher/letters/A.mp3', 'assets/cypher/nato/A.wav', this.codeVolume));
      this._translations.push(new Translation("B", "Bravo", 'assets/cypher/letters/B.mp3', 'assets/cypher/nato/B.wav', this.codeVolume));
      this._translations.push(new Translation("C", "Charlie", 'assets/cypher/letters/C.mp3', 'assets/cypher/nato/C.wav', this.codeVolume));
      this._translations.push(new Translation("D", "Delta", 'assets/cypher/letters/D.mp3', 'assets/cypher/nato/D.wav', this.codeVolume));
      this._translations.push(new Translation("E", "Echo", 'assets/cypher/letters/E.mp3', 'assets/cypher/nato/E.wav', this.codeVolume));
      this._translations.push(new Translation("F", "Foxtrot", 'assets/cypher/letters/F.mp3', 'assets/cypher/nato/F.wav', this.codeVolume));
      this._translations.push(new Translation("G", "Golf", 'assets/cypher/letters/G.mp3', 'assets/cypher/nato/G.wav', this.codeVolume));
      this._translations.push(new Translation("H", "Hotel", 'assets/cypher/letters/H.mp3', 'assets/cypher/nato/H.wav', this.codeVolume));
      this._translations.push(new Translation("I", "India", 'assets/cypher/letters/I.mp3', 'assets/cypher/nato/I.wav', this.codeVolume));
      this._translations.push(new Translation("J", "Juliett", 'assets/cypher/letters/J.mp3', 'assets/cypher/nato/J.wav', this.codeVolume));

      this._translations.push(new Translation("K", "Kilo", 'assets/cypher/letters/K.mp3', 'assets/cypher/nato/K.wav', this.codeVolume));
      this._translations.push(new Translation("L", "Lima", 'assets/cypher/letters/L.mp3', 'assets/cypher/nato/L.wav', this.codeVolume));
      this._translations.push(new Translation("M", "Mike", 'assets/cypher/letters/M.mp3', 'assets/cypher/nato/M.wav', this.codeVolume));
      this._translations.push(new Translation("N", "November", 'assets/cypher/letters/N.mp3', 'assets/cypher/nato/N.wav', this.codeVolume));
      this._translations.push(new Translation("O", "Oscar", 'assets/cypher/letters/O.mp3', 'assets/cypher/nato/O.wav', this.codeVolume));
      this._translations.push(new Translation("P", "Papa", 'assets/cypher/letters/P.mp3', 'assets/cypher/nato/P.wav', this.codeVolume));
      this._translations.push(new Translation("Q", "Quebec", 'assets/cypher/letters/Q.mp3', 'assets/cypher/nato/Q.wav', this.codeVolume));
      this._translations.push(new Translation("R", "Romeo", 'assets/cypher/letters/R.mp3', 'assets/cypher/nato/R.wav', this.codeVolume));
      this._translations.push(new Translation("S", "Sierra", 'assets/cypher/letters/S.mp3', 'assets/cypher/nato/S.wav', this.codeVolume));
      this._translations.push(new Translation("T", "Tango", 'assets/cypher/letters/T.mp3', 'assets/cypher/nato/T.wav', this.codeVolume));      

      this._translations.push(new Translation("U", "Uniform", 'assets/cypher/letters/U.mp3', 'assets/cypher/nato/U.wav', this.codeVolume));
      this._translations.push(new Translation("V", "Victor", 'assets/cypher/letters/V.mp3', 'assets/cypher/nato/V.wav', this.codeVolume));
      this._translations.push(new Translation("W", "Whiskey", 'assets/cypher/letters/W.mp3', 'assets/cypher/nato/W.wav', this.codeVolume));
      this._translations.push(new Translation("X", "Xray", 'assets/cypher/letters/X.mp3', 'assets/cypher/nato/X.wav', this.codeVolume));
      this._translations.push(new Translation("Y", "Yankee", 'assets/cypher/letters/Y.mp3', 'assets/cypher/nato/Y.wav', this.codeVolume));
      this._translations.push(new Translation("Z", "Zulu", 'assets/cypher/letters/Z.mp3', 'assets/cypher/nato/Z.wav', this.codeVolume));           
  }
}