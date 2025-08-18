export class Paddler {
  name!: string;
  weigth!: number;

  static of(name: string, weigth: number): Paddler {
    return {
      name: name,
      weigth: weigth,
    };
  }
}
