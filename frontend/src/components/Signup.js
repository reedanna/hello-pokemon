import React, { Component } from 'react';

export default class Login extends Component {

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
            .then(response => response.json())
            .then(data => {
                if (data.name) {
                    alert(`New account made: ${data.name}`)
                    fetch('http://localhost:3001/teams', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            user_id: data.id,
                            name: data.name
                        })
                    })
                }
                else {
                    alert(data)
                }
            })

    }

    render() {
        return (
            <div className="signupForm">
                <form>
                    <input placeholder="Username" name="username" required="" type="text" />
                    <input placeholder="Password" name="password" required="" type="password" />
                    <button type="button" onClick={this.signup}>SIGN UP</button>
                </form>
            </div>
        )
    }
}