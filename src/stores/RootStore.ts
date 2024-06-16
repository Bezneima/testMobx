import {MyStore} from "./MyStore/MyStore";

export class RootStore {
    myStore: MyStore;
    constructor(myStore: MyStore) {
        this.myStore = myStore;
    }
}
