import Account from "./Account";

export default class PhoneContact {
    private id: string;
    private name: string;
    private country: string;
    private city: string;
    private avatar: string;
    private address: string;
    private accounts: Array<Account>;
    private calls: Array<Account>;

    constructor(id: string, name: string, country: string, city: string, avatar: string, address: string, accounts: Account[], calls: Account[]) {
        this.id = id;
        this.name = name;
        this.country = country;
        this.city = city;
        this.avatar = avatar;
        this.address = address;
        this.accounts = accounts;
        this.calls = calls;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCountry() {
        return this.country;
    }

    getCity() {
        return this.city;
    }

    getAvatar() {
        return this.avatar;
    }

    getAddress() {
        return this.address;
    }

    getAccounts() {
        return this.accounts;
    }

    getCalls() {
        return this.calls;
    }

}