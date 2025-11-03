import { Cypher } from "./cypher";
import { Translation } from "./translation";

export class A1Z26 extends Cypher {
  constructor() {
      super('A1Z26', 'assets/cypher/a1z26/A1Z26.mp3', 2);
      this._testLetterToCode = true;
      this._testCodeToLetter = true;      
      this._translations.push(new Translation("A", "1", 'assets/cypher/letters/A.mp3', 'assets/cypher/a1z26/1.mp3'));
      this._translations.push(new Translation("B", "2", 'assets/cypher/letters/B.mp3', 'assets/cypher/a1z26/2.mp3'));
      this._translations.push(new Translation("C", "3", 'assets/cypher/letters/C.mp3', 'assets/cypher/a1z26/3.mp3'));
      this._translations.push(new Translation("D", "4", 'assets/cypher/letters/D.mp3', 'assets/cypher/a1z26/4.mp3'));
      this._translations.push(new Translation("E", "5", 'assets/cypher/letters/E.mp3', 'assets/cypher/a1z26/5.mp3'));
      this._translations.push(new Translation("F", "6", 'assets/cypher/letters/F.mp3', 'assets/cypher/a1z26/6.mp3'));
      this._translations.push(new Translation("G", "7", 'assets/cypher/letters/G.mp3', 'assets/cypher/a1z26/7.mp3'));
      this._translations.push(new Translation("H", "8", 'assets/cypher/letters/H.mp3', 'assets/cypher/a1z26/8.mp3'));
      this._translations.push(new Translation("I", "9", 'assets/cypher/letters/I.mp3', 'assets/cypher/a1z26/9.mp3'));
      this._translations.push(new Translation("J", "10", 'assets/cypher/letters/J.mp3', 'assets/cypher/a1z26/10.mp3'));

      this._translations.push(new Translation("K", "11", 'assets/cypher/letters/K.mp3', 'assets/cypher/a1z26/11.mp3'));
      this._translations.push(new Translation("L", "12", 'assets/cypher/letters/L.mp3', 'assets/cypher/a1z26/12.mp3'));
      this._translations.push(new Translation("M", "13", 'assets/cypher/letters/M.mp3', 'assets/cypher/a1z26/13.mp3'));
      this._translations.push(new Translation("N", "14", 'assets/cypher/letters/N.mp3', 'assets/cypher/a1z26/14.mp3'));
      this._translations.push(new Translation("O", "15", 'assets/cypher/letters/O.mp3', 'assets/cypher/a1z26/15.mp3'));
      this._translations.push(new Translation("P", "16", 'assets/cypher/letters/P.mp3', 'assets/cypher/a1z26/16.mp3'));
      this._translations.push(new Translation("Q", "17", 'assets/cypher/letters/Q.mp3', 'assets/cypher/a1z26/17.mp3'));
      this._translations.push(new Translation("R", "18", 'assets/cypher/letters/R.mp3', 'assets/cypher/a1z26/18.mp3'));
      this._translations.push(new Translation("S", "19", 'assets/cypher/letters/S.mp3', 'assets/cypher/a1z26/19.mp3'));
      this._translations.push(new Translation("T", "20", 'assets/cypher/letters/T.mp3', 'assets/cypher/a1z26/20.mp3'));      

      this._translations.push(new Translation("U", "21", 'assets/cypher/letters/U.mp3', 'assets/cypher/a1z26/21.mp3'));
      this._translations.push(new Translation("V", "22", 'assets/cypher/letters/V.mp3', 'assets/cypher/a1z26/22.mp3'));
      this._translations.push(new Translation("W", "23", 'assets/cypher/letters/W.mp3', 'assets/cypher/a1z26/23.mp3'));
      this._translations.push(new Translation("X", "24", 'assets/cypher/letters/X.mp3', 'assets/cypher/a1z26/24.mp3'));
      this._translations.push(new Translation("Y", "25", 'assets/cypher/letters/Y.mp3', 'assets/cypher/a1z26/25.mp3'));
      this._translations.push(new Translation("Z", "26", 'assets/cypher/letters/Z.mp3', 'assets/cypher/a1z26/26.mp3'));           
  }
}