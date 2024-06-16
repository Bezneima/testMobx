import { makeAutoObservable, action, computed } from 'mobx';
import {TAccount} from "./Account";

export class MyStore {
    public mainCounterValue: number = 0;
    public insideCounterValue: number = 0;

    public accounts: TAccount[] = [];

    constructor() {
        makeAutoObservable(this, {
            // total: computed
        });
    }

    @action
    public incMain() {
        this.mainCounterValue += 1;
    }

    @action
    public decMain() {
        this.mainCounterValue -= 1;
    }

    @action
    public incInsideCounter() {
        this.insideCounterValue += 1;
    }

    @action
    public decInsideCounter() {
        this.insideCounterValue -= 1;
    }

    get total() {
        console.log("Computing...");
        return (this.mainCounterValue || 0) + (this.insideCounterValue || 0);
    }

    @action
    setAccounts(accounts: TAccount[]) {
        this.accounts = accounts;
    }

    public fetchAccounts() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                this.setAccounts(json);
            });
    }
}
