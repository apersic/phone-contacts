export default class Account {
  private balance: number;
  private created: string;
  private id: string;
  private name: string;
  private subscriberId: string;

  constructor(balance: number, created: string, id: string, name: string, subscriberId: string) {
    this.balance = balance;
    this.created = created;
    this.id = id;
    this.name = name;
    this.subscriberId = subscriberId;
  }

  getBalance() {
    return this.balance;
  }

  getCreated() {
    return this.created;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getSubscriberId() {
    return this.subscriberId;
  }
}
