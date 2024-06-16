import {createContext, ReactNode} from "react";
import {RootStore} from "../stores/RootStore";
import {MyStore} from "../stores/MyStore/MyStore";

let rootStore: RootStore;
export const RootStoreContext = createContext<RootStore | undefined>(undefined);
export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
    const myStore = new MyStore();
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const root = rootStore ?? new RootStore(
        myStore,
    );

    return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
}
