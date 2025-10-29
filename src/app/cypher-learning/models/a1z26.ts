import { Cypher } from "./cypher";
import { Translation } from "./translation";

export class A1Z26 extends Cypher {
  constructor() {
      super();
      this._translations.push(new Translation("A", "1", 'assets/cypher/a1z26/letters/A.mp3', 'assets/cypher/a1z26/numbers/1.mp3'));
      this._translations.push(new Translation("B", "2", 'assets/cypher/a1z26/letters/B.mp3', 'assets/cypher/a1z26/numbers/2.mp3'));
      this._translations.push(new Translation("C", "3", 'assets/cypher/a1z26/letters/C.mp3', 'assets/cypher/a1z26/numbers/3.mp3'));
      this._translations.push(new Translation("D", "4", 'assets/cypher/a1z26/letters/D.mp3', 'assets/cypher/a1z26/numbers/4.mp3'));
      this._translations.push(new Translation("E", "5", 'assets/cypher/a1z26/letters/E.mp3', 'assets/cypher/a1z26/numbers/5.mp3'));
      this._translations.push(new Translation("F", "6", 'assets/cypher/a1z26/letters/F.mp3', 'assets/cypher/a1z26/numbers/6.mp3'));
      this._translations.push(new Translation("G", "7", 'assets/cypher/a1z26/letters/G.mp3', 'assets/cypher/a1z26/numbers/7.mp3'));
      this._translations.push(new Translation("H", "8", 'assets/cypher/a1z26/letters/H.mp3', 'assets/cypher/a1z26/numbers/8.mp3'));
      this._translations.push(new Translation("I", "9", 'assets/cypher/a1z26/letters/I.mp3', 'assets/cypher/a1z26/numbers/9.mp3'));
      this._translations.push(new Translation("J", "10", 'assets/cypher/a1z26/letters/J.mp3', 'assets/cypher/a1z26/numbers/10.mp3'));

      this._translations.push(new Translation("K", "11", 'assets/cypher/a1z26/letters/K.mp3', 'assets/cypher/a1z26/numbers/11.mp3'));
      this._translations.push(new Translation("L", "12", 'assets/cypher/a1z26/letters/L.mp3', 'assets/cypher/a1z26/numbers/12.mp3'));
      this._translations.push(new Translation("M", "13", 'assets/cypher/a1z26/letters/M.mp3', 'assets/cypher/a1z26/numbers/13.mp3'));
      this._translations.push(new Translation("N", "14", 'assets/cypher/a1z26/letters/N.mp3', 'assets/cypher/a1z26/numbers/14.mp3'));
      this._translations.push(new Translation("O", "15", 'assets/cypher/a1z26/letters/O.mp3', 'assets/cypher/a1z26/numbers/15.mp3'));
      this._translations.push(new Translation("P", "16", 'assets/cypher/a1z26/letters/P.mp3', 'assets/cypher/a1z26/numbers/16.mp3'));
      this._translations.push(new Translation("Q", "17", 'assets/cypher/a1z26/letters/Q.mp3', 'assets/cypher/a1z26/numbers/17.mp3'));
      this._translations.push(new Translation("R", "18", 'assets/cypher/a1z26/letters/R.mp3', 'assets/cypher/a1z26/numbers/18.mp3'));
      this._translations.push(new Translation("S", "19", 'assets/cypher/a1z26/letters/S.mp3', 'assets/cypher/a1z26/numbers/19.mp3'));
      this._translations.push(new Translation("T", "20", 'assets/cypher/a1z26/letters/T.mp3', 'assets/cypher/a1z26/numbers/20.mp3'));      

      this._translations.push(new Translation("U", "21", 'assets/cypher/a1z26/letters/U.mp3', 'assets/cypher/a1z26/numbers/21.mp3'));
      this._translations.push(new Translation("V", "22", 'assets/cypher/a1z26/letters/V.mp3', 'assets/cypher/a1z26/numbers/22.mp3'));
      this._translations.push(new Translation("W", "23", 'assets/cypher/a1z26/letters/W.mp3', 'assets/cypher/a1z26/numbers/23.mp3'));
      this._translations.push(new Translation("X", "24", 'assets/cypher/a1z26/letters/X.mp3', 'assets/cypher/a1z26/numbers/24.mp3'));
      this._translations.push(new Translation("Y", "25", 'assets/cypher/a1z26/letters/Y.mp3', 'assets/cypher/a1z26/numbers/25.mp3'));
      this._translations.push(new Translation("Z", "26", 'assets/cypher/a1z26/letters/Z.mp3', 'assets/cypher/a1z26/numbers/26.mp3'));           
  }
}