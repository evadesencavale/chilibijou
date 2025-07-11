export class NBackPremise {
  firstSubject: string[];
  relation: string[];
  secondSubject: string[];

  constructor(
    firstSubject: string[],
    relation: string[],
    secondSubject: string[]
  ) {
    this.firstSubject = firstSubject;
    this.relation = relation;
    this.secondSubject = secondSubject;
  }

  getValidChoices(others: NBackPremise[]): string {
    let oneAndTwo = '1',
      twoAndThree = '1',
      oneAndThree = '1';
    for (const other of others) {
      if (other.firstSubject === this.firstSubject) twoAndThree = '0';
      if (other.relation === this.relation) oneAndThree = '0';
      if (other.secondSubject === this.secondSubject) oneAndTwo = '0';
    }
    return oneAndTwo + twoAndThree + oneAndThree;
  }

  isEquals(other: NBackPremise): boolean {
    if (
      this.firstSubject.join('') === other.firstSubject.join('') &&
      this.relation.join('') === other.relation.join('') &&
      this.secondSubject.join('') === other.secondSubject.join('')
    ) {
      return true;
    }
    return false;
  }
}
