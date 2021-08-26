import React from 'react';

class Condition extends React.Component {
    constructor(){
        super()

        this.state= {
            isLilithin: true
        }

    }

    render(){
        return this.state.isLilithin ?
        <div>Greetings Lilithin</div>:
        <div>Greetings Merria</div>

    }
}

export default Condition;