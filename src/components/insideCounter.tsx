import React from "react";
import {observer} from "mobx-react-lite";
import {useMyStore} from "../hooks/useMyStore";

export const InsideCounter: React.FC = observer(() => {
    const myStore = useMyStore();
    const { insideCounterValue } = myStore;
    const onIncriment = () => {
        myStore.incInsideCounter();
    };

    const onDecriment = () => {
        myStore.decInsideCounter();
    };

    console.info('renderInside');
    return (
        <div>
            {insideCounterValue}
            <div>
                <button
                    onClick={onIncriment}
                >
                    Инкримент
                </button>
                <button
                    onClick={onDecriment}
                >
                    Декримент
                </button>
            </div>
        </div>
    )
});
