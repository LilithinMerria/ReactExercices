import React, {useState} from 'react';

const Welcome = () => {

    const [name, setName] = useState({firstname: "", lastname: ""});
    return(
       
       <form>
            <h2>Your Firstname is : {name.firstname}</h2>
            <h2>Your Lastname is : {name.lastname}</h2>
            <input type="text" placeholder="Firstname" value={name.firstname} onChange={e => setName({... name, firstname:e.target.value})}/>
            <input type="text" placeholder="Lastname" value={name.lastname} onChange={e => setName({... name, lastname:e.target.value})}/>
            <button>Submit</button>
        </form>
       
       
    )
}
 
export default Welcome;