import React from 'react'
import Login from './Login.js'
import Signup from './Signup.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Index extends React.Component {
<<<<<<< HEAD
    constructor() {
        super();
        this.state = {
            loginForm: false,
            signupForm: false,
            currentUser: ""
        }
    }

    login = (e) => {
        fetch('http://localhost:3001/login', {
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
        fetch('http://localhost:3001/users', {
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
=======
    render() {
        return (
            <Router>
                <div className="mid-container">
                    <Route exact path="/login" render={() => (
                        <Login setCurrentUser={this.props.setCurrentUser} />
                    )} />
                    <Route exact path="/signup" render={() => (
                        <Signup setCurrentUser={this.props.setCurrentUser} />
                    )} />
                </div>
                <div className="c">
                    <NavLink to="/login"><div className="pokeball">Login</div></NavLink>
                </div>
                <div className="d">
                    <NavLink to="/signup"><div className="pokeball">Sign up</div></NavLink>
                </div>
            </Router>
>>>>>>> 725829ee8ab49d42a2b6cbcd8b2f50a4754f6e26
        );
    }
}

export default Index;