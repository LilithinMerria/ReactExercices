import React from 'react';

class Merria extends React.Component {
    constructor() {
        super()
        this.state = {
            greetings: "Greetings Merria master of Telepathy",
            count: 1
        }
    }

    logoutHere = () => {
        this.setState({
            greetings: "Bye Bye master Merria"
        });
    }

    raisePower = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
        
    }

    temperPower = () => {
        this.setState(prevState => ({
            count: prevState.count -1
        }));
    }

    render() {
        const {greetings, count} = this.state;
        return (
            <div>
                <h1>{greetings}</h1>
                <button onClick={this.logoutHere}>Click to log out</button>
                <h1>Power level {count}</h1>
                <button onClick={this.raisePower}>Raise Your Power</button>
                <button onClick={this.temperPower}>Temper Your Power</button>
            </div>
        );
    }



}

export default Merria;

