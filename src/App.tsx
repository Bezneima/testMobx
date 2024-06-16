import React from 'react';
import { useMyStore} from "./hooks/useMyStore";
import {observer} from "mobx-react-lite";
import {InsideCounter} from "./components/insideCounter";
import {FakeAccaunts} from "./components/FakeAccaunts";

const App: React.FC = observer(() => {
  const myStore = useMyStore();
  const {mainCounterValue} = myStore;

  const onIncriment = () => {
      myStore.incMain();
  }

  const onDecriment = () => {
      myStore.decMain();
  }
    console.info('Рендер app');
  return (
    <div className="App">
        {/*раскоменти это потом, это переменные коорые зависимые от других*/}
        {/*<div>Всего: {total}</div>*/}
      {mainCounterValue}
        <div>
        <button
            value={''}
            onClick={onIncriment}
        >
            Инкримент
        </button>
        <button
            value={''}
            onClick={onDecriment}
        >
            Декримент
        </button>
        </div>
        <InsideCounter/>
        <FakeAccaunts/>
    </div>
  );
});

export default App;
