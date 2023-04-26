import React from 'react'

class Welcome extends React.Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome Jauhar'
        }
    }

    subscribe () {
        this.setState({
            message: 'Thank You For Subscribing'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.subscribe()}>Subscribe</button>
            </>
        )
    }
}

export default Welcome