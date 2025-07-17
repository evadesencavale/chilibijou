export class Knowledge {
  private category: string;
  private id: string;
  private information: string;

  public getCategory() {
    return this.category;
  }

  public getId() {
    return this.id;
  }

  public getInformation() {
    return this.information;
  }

  private constructor(category: string, id: string, information: string) {
    this.category = category;
    this.id = id;
    this.information = information;
  }

  static of(category: string, id: string, information: string): Knowledge {
    return new Knowledge(category, id, information);
  }
}
