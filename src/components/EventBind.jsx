import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hi",
        };

        // -> binding in the constructor
        // this is the recommended apporoach in the official documentation
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.message === 'Welcome'){
            this.setState({
                message: "Hi",
            });
            return;
        }
        this.setState({
            message: "Welcome",
        });
    }

    // --> class property as arrow functions
    // handleClick = () => {
    //     this.setState({
    //         message: "Welcome",
    //     });
    // };

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                {/* these are teh possible solutions for event binding */}

                {/* --> arrow function in render */}
                {/* <button onClick={() => this.handleClick()}> Send </button> */}

                {/* --> binding in render */}
                {/* <button onClick={this.handleClick.bind(this)}> Send </button> */}
                <button onClick={this.handleClick}> Send </button>
            </>
        );
    }
}

export default EventBind;
