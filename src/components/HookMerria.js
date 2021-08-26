import React, {useState, useEffect} from 'react';
import FetchData from './FetchData';

const Merria = () => {
    const [greetings, logIn] = useState("Greetings Stranger");
    const [username, setUsername] = useState("");
    const power = 0;
    const [raiseTemper, powerModification] = useState(power);

    // use effect to change the title count
    useEffect(() => {
        console.log("useEffect - Change to the document title");        
        document.title = `Pow. Level ${raiseTemper}`;
    }, [raiseTemper])

    // double power using for loop
    const doublePower = () => {
        for (let i = 1; i < 3; i++ ) {
            powerModification(prev => prev + 1)
        }
    }
    
    if (greetings === "Greetings Stranger") {
        return(
            <div>
                <h2 id="hello">{greetings}</h2>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                <button onClick={() => logIn("Greetings Merria")}>LogIn</button>
            </div>
          
        )
    } else 
    
    return(
        <div>
            <h2>Greetings Merria</h2>
            <button id="greet" onClick={() => logIn("Greetings Stranger")}>LogOut</button>
            <h2>Your Psychic Power Level is : {raiseTemper}</h2>
           
            <button onClick={() => powerModification(prev => prev + 1)}>Raise Your Power</button>
            <button onClick={() => powerModification (prev => prev - 1)}>Temper Your Power</button>
            <button onClick={() => powerModification(power)}>Reset Your Power</button>
            <button onClick={doublePower}>Double Your Power</button>
        </div>
    )
}

export default Merria;