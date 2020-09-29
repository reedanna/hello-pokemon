import React from 'react'

class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            loginForm: false,
            signupForm: false
        }
    }
    render(){
        return( 
            <>
            <div className="mid-container">
            {this.state.loginForm? 
            <div className="loginForm">
                <form>
                    <input placeholder="Username" required="" type="text" />
                    <input placeholder="Password" required="" type="password" />
                    <button type="button">LOG IN</button>
                </form>
            </div>
            :null}
            {this.state.signupForm? 
            <div className="signupForm">
                <form>
                    <input placeholder="Username" required="" type="text" />
                    <input placeholder="Password" required="" type="password" />
                    <button type="button">SIGN UP</button>
                </form>
            </div>
            :null}
            </div>
            <div className="c">
                <div className="pokeball" onClick={()=>this.setState({loginForm: true, signupForm: false})}>Login</div>
            </div>
            <div className="d">
                <div className="pokeball"onClick={()=>this.setState({signupForm: true, loginForm: false})}>Sign up</div>
            </div>
            </>
        );
    }
}

export default Index;