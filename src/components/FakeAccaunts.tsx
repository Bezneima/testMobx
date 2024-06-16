import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import {useMyStore} from "../hooks/useMyStore";

export const FakeAccaunts = observer(() => {
    const myStore = useMyStore();
    const {accounts} = myStore;

    useEffect(()=>{
        myStore.fetchAccounts();
    },[myStore])

    return <ul>{accounts.map((account)=>{
        const {id, name, username, website} = account;
        return <li key={id}>
            {`${name} ${username}  ${website}`}
        </li>
    })}</ul>
});
