import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    decrement() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <h4>Current Count</h4>
                <button onClick={() => this.decrement()}>Decrease</button> 
                <button onClick={() => this.reset()}>Reset</button>
                <button onClick={() => this.increment()}>Increase</button>
            </>
        );
    }
}

export default Counter;
