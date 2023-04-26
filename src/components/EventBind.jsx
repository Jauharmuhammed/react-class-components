import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hi",
        };

        // this is the recommended apporoach in the official documentation
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            message: "Welcome",
        });
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                {/* these are teh possible solutions for event binding */}
                {/* <button onClick={() => this.handleClick()}> Send </button> */}
                {/* <button onClick={this.handleClick.bind(this)}> Send </button> */}
                <button onClick={this.handleClick}> Send </button>
            </>
        );
    }
}

export default EventBind;
