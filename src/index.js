import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Merria from './HookMerria';
import Greetings from './Greetings';
import Condition from './ConditionGreetings';
import Flower from './FlowersList';
import Welcome from './HookForm';

function Hello() {
    return(
        <div>
            {/*<Condition />
            <Greetings name="Ashlyn" ability="Psychokinesis"  />
            <Greetings name="Snow" ability="Levitation"/>
            <p>How are you??</p>*/}
            <Welcome />
            <Merria />  
            <Flower />
    </div>
    );
}

ReactDOM.render(
    <Hello />,
    document.getElementById("root")
);
  