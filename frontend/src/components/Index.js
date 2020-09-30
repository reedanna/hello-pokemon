import React from 'react'
import Login from './Login.js'
import Signup from './Signup.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Index extends React.Component {
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
        );
    }
}

export default Index;