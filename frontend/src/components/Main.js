import React from 'react'
import Pokedex from './Pokedex.js';
import TeamInfo from './TeamInfo.js';
import Login from './Login.js'
import Signup from './Signup.js'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            pokemons: [],
            myteam: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/pokemons')
            .then(res => res.json())
            .then(json => {
                this.setState({ pokemons: json })
            })
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
        if (user === "") {

        }
        else {
        }
    }

    addPoke = (poke) => {
        if (this.state.myteam.length < 6) {
            this.setState({ myteam: [...this.state.myteam, poke] })
        }
    }

    render() {
        return (
            <Router>
                <Route exact path="/myteam" render={() => (
                    <TeamInfo myteam={this.state.myteam} />
                )} />

                <Route exact path="/pokedex" render={() => (
                    <Pokedex pokemons={this.state.pokemons} addPoke={this.addPoke} />
                )} />


                <div className="mid-container">
                    <Route exact path="/login" render={() => (
                        <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
                    )} />
                    <Route exact path="/signup" render={() => (
                        <Signup setCurrentUser={this.setCurrentUser} />
                    )} />
                </div>

                {this.state.currentUser === "" ?
                    <>
                        <div className="c">
                            <NavLink to="/login"><div className="pokeball">Login</div></NavLink>
                        </div>
                        <div className="d">
                            <NavLink to="/signup"><div className="pokeball">Sign up</div></NavLink>
                        </div>
                    </>
                    : null}
                {this.state.currentUser !== "" ?
                    <>
                        <div className="WelcomeContainer">
                             <img src="./img/professor oak.webp" alt="oak"/>
                             <p>Welcome, {this.state.currentUser.name}!</p>
                        </div>
                        <div className="c">
                            <NavLink to="/myteam"><div className="pokeball">My Team</div></NavLink>
                        </div>
                        <div className="d">
                            <NavLink to="/pokedex"><div className="pokeball">Pokedex</div></NavLink>
                        </div>
                        <div className="f">
                            <NavLink to="/login"><div className="pokeball" onClick={() => this.setCurrentUser("")}>Logout</div></NavLink>
                        </div>
                    </>
                    : null}
            </Router>
        )
    }

}

export default Main;