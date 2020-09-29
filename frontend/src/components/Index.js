import React from 'react'

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            loginForm: false,
            signupForm: false,
            currentUser: ""
        }
    }

    login = (e) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.parentElement.username.value,
                password: e.target.parentElement.password.value
            })
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    currentUser: data.user
                })
            })
    }

    signup = (e) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.parentElement.username.value,
                password: e.target.parentElement.password.value
            })
        })
    }

    render() {
        return (
            <>
                <div className="mid-container">
                    {this.state.loginForm ?
                        <div className="loginForm">
                            <form>
                                <input placeholder="Username" name="username" required="" type="text" />
                                <input placeholder="Password" name="password" required="" type="password" />
                                <button type="button" onClick={this.login}>LOG IN</button>
                            </form>
                        </div>
                        : null}
                    {this.state.signupForm ?
                        <div className="signupForm">
                            <form>
                                <input placeholder="Username" name="username" required="" type="text" />
                                <input placeholder="Password" name="password" required="" type="password" />
                                <button type="button" onClick={this.signup}>SIGN UP</button>
                            </form>
                        </div>
                        : null}
                </div>
                <div className="c">
                    <div className="pokeball" onClick={() => this.setState({ loginForm: true, signupForm: false })}>Login</div>
                </div>
                <div className="d">
                    <div className="pokeball" onClick={() => this.setState({ signupForm: true, loginForm: false })}>Sign up</div>
                </div>
            </>
        );
    }
}

export default Index;