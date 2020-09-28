import React from 'react'

class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            loginForm: false,
        }
    }

    render(){
        return(
            <div className="LoginForm">
            <button className="loginButton" onClick={()=>this.setState({loginForm: !this.state.loginForm})}>
            {this.state.loginForm? "hi": "form"}
            </button>
            </div>
        );
    }
}

export default Index;