import React from 'react';

function Greetings(props) {
    const {name, ability} = props
    return <h1>Hello {name} master of {ability}</h1>
}

export default Greetings;