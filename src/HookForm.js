import React, {useState} from 'react';

function Welcome () {
    const [name, setName] = useState({firstname:"", lastname:""});
    const [power, setAbility] = useState({ability:""});
    return(
        
        <form>
            <h2>Greetings {name.firstname + name.lastname}</h2>
            <h2>Master of {power.ability}</h2>

            <input type="text" placeholder="FirstName" value={name.firstname} onChange={e => setName({... 
                name, firstname: e.target.value})}/>
            <input type="text" placeholder="LastName" value={name.lastname} onChange={e => setName({... 
                name, lastname: e.target.value})} />
            <input type="text" placeholder="Ability" value={power.ability} onChange={e => setAbility({... 
                power, ability: e.target.value})} />
            
        </form>
    )
}



export default Welcome;