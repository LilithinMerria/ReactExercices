import React, {useState} from 'react';

function Merria () {
    const [greetings, logOut] = useState("Greetings Merria");
    const countState = 0;
    const [count, raisePower] = useState(countState);
    
    return(
        <div>
            <h1>{greetings}</h1>
            <button onClick={() => logOut("Bye Bye Merria")}>Log Out</button>
            <h2>Your Power Level is {count}</h2>
            <button onClick={() => raisePower(prev => prev + 1)}>Increase Your Power</button>
            <button onClick={() => raisePower(prev => prev - 1)}>Temper Your Power</button>
            <button onClick={() => raisePower(countState)}>Reset Your Power</button>
        </div>
    )

}






export default Merria;

