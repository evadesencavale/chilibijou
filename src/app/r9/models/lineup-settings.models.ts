import { LineUp } from './lineup-models';
import { Paddler } from './paddler.models';

export class LineUpSettings {
  public static ALL_PADDLERS = [
    { name: 'Steph', weigth: 126 },
    { name: 'Anaëlle', weigth: 130 },
    { name: 'Gui', weigth: 145 },
    { name: 'Prisc', weigth: 132 },
    { name: 'Alexane', weigth: 140 },
    { name: 'Myy', weigth: 145 },
    { name: 'Cath', weigth: 147 },
    { name: 'Juu', weigth: 156 },
    { name: 'Étienne', weigth: 156 },
    { name: 'Vick', weigth: 171 },
    { name: 'Dan', weigth: 180 },
    { name: 'Déry', weigth: 184 },
    { name: 'Cantin', weigth: 185 },
    { name: 'Éric', weigth: 193 },
    { name: 'Pat', weigth: 199 },
    { name: 'Kev', weigth: 202 },
  ];

  public static _b1 = -0.9;
  public static _b2 = -0.5;
  public static _b3 = 0.3;
  public static _b4 = 0.7;
  public static _b5 = 1;

  private _lineup: LineUp | undefined;

  private _paddlers: Paddler[] = LineUpSettings.ALL_PADDLERS;

  /*set b1(value: number) {
    this._b1 = value;
  }
  get b1(): number {
    return this._b1;
  }
  set b2(value: number) {
    this._b2 = value;
  }
  get b2(): number {
    return this._b2;
  }
  set b3(value: number) {
    this._b3 = value;
  }
  get b3(): number {
    return this._b3;
  }
  set b4(value: number) {
    this._b4 = value;
  }
  get b4(): number {
    return this._b4;
  }
  set b5(value: number) {
    this._b5 = value;
  }
  get b5(): number {
    return this._b5;
  }*/

  set lineup(value: LineUp) {
    this._lineup = value;
  }

  get lineup(): LineUp | undefined {
    return this._lineup;
  }

  set paddlers(value: Paddler[]) {
    this._paddlers = value;
  }
  get paddlers(): Paddler[] {
    return LineUpSettings.ALL_PADDLERS;
  }
}
