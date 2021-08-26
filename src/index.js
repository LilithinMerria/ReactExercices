import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Merria from './components/HookMerria';
import Greetings from './components/Greetings';
import Condition from './components/ConditionGreetings';
import Flower from './components/FlowersList';
import Welcome from './components/HookForm';
import AddFlower from './components/FlowerHook';
import MoveMouse from './components/HookMousePosition';
import ContainMouse from './components/MouseMoveContainer';
import CounterInterval from './components/HookCountInternval';
import FetchData from './components/FetchData';
import PleasureFunction from './components/FetchGitData';

// creating context
export const Username = React.createContext()
export const Company = React.createContext()

function Hello() {
    return(
        <div>
            {/*<Condition />
            <Greetings name="Ashlyn" ability="Psychokinesis"  />
            <Greetings name="Snow" ability="Levitation"/>
            <p>How are you??</p>*/}
            <PleasureFunction login="lilithinmerria"/> <br /> <br /><br /><br /><br />
            <Username.Provider value={"Ashlyn"}>
                <Company.Provider value={"SilverMuse"}></Company.Provider>
            </Username.Provider>
            <CounterInterval />
            <ContainMouse />
            <Welcome />
            <Merria />  
            <AddFlower />
            {/*<Flower />*/}

        </div>
    );
}

ReactDOM.render(
    <Hello />,
    document.getElementById("root")
);
  