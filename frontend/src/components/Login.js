import React, { Component } from 'react';

export default class Login extends Component {

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
                if (data.user) {
                    this.props.setCurrentUser(data.user)
                }
                else {
                    alert(data.message)
                }
            })
    }

    render() {
        return (
            <div className="loginForm">
                {this.props.currentUser === "" ?

                    <form>
                        <input placeholder="Username" name="username" required="" type="text" />
                        <input placeholder="Password" name="password" required="" type="password" />
                        <button type="button" onClick={this.login}>LOG IN</button>
                    </form>

                    : <div className="WelcomeContainer">
                        <img src="./img/professor oak.webp" alt="oak" />
                        <p>Welcome, {this.props.currentUser.name}!</p>
                    </div>
                }
            </div>
        )
    }
}