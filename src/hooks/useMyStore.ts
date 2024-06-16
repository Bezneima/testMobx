import {useRootStore} from "./useRootStore";

export const useMyStore = () => {
    const root = useRootStore();
    return root.myStore;
};
