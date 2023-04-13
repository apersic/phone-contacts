export default class Country {
  private name: string;
  private alpha2Code: string;
  private flag: string;

  constructor(name: string, alpha2Code: string, flag: string) {
    this.name = name;
    this.alpha2Code = alpha2Code;
    this.flag = flag;
  }

  getName() {
    return this.name;
  }

  getAlpha2Code() {
    return this.alpha2Code;
  }

  getFlag() {
    return this.flag;
  }
}
