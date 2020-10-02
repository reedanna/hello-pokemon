import React from 'react'
import Pokedex from './Pokedex.js';
import TeamInfo from './TeamInfo.js';
import Login from './Login.js'
import Signup from './Signup.js'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            currentTeam: "",
            pokemons: []
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
        if (user !== "") {
            fetch(`http://localhost:3001/users/${user.id}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        currentTeam: json.teams[0]
                    })
                })
        }
        else {
            this.setState({
                currentTeam: ""
            })
        }
    }

    addPoke = (poke) => {
        if (this.state.currentTeam.pokemon_teams.length < 6) {
            this.state.currentTeam.pokemon_teams.push({
                pokemon: poke
            })
            fetch('http://localhost:3001/pokemon_teams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    team_id: this.state.currentTeam.id,
                    pokemon_id: poke.id
                })
            })
        }
        else {
            alert("You can only have 6 Pokemon per team!")
        }
    }

    releasePoke = (poke) => {
        console.log(this.state.currentTeam.pokemon_teams.find(pokemon_team => pokemon_team.pokemon.name === poke.name).id)
        const deletedPokeTeam = this.state.currentTeam.pokemon_teams.find(pokemon_team => pokemon_team.pokemon.name === poke.name)
        const currentTeamCopy = this.state.currentTeam
        currentTeamCopy.pokemon_teams = this.state.currentTeam.pokemon_teams.filter(pokemon_team => pokemon_team !== deletedPokeTeam)
        this.setState({
            currentTeam: currentTeamCopy
        })

        fetch(`http://localhost:3001/pokemon_teams/${deletedPokeTeam.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })


    }

    // calculates which types a Pokemon resists
    calculateStrengths = (poke) => {
        if (poke.types.length === 1) {
            return poke.types[0].strong_against
        }
        else {
            let strengths = poke.types[0].strong_against
            strengths = strengths.filter(type =>
                !poke.types[1].weak_against.includes(type) && !poke.types[1].immune_to.includes(type)
            )
            strengths = strengths.concat(poke.types[1].strong_against)
            strengths = strengths.filter(type =>
                !poke.types[0].weak_against.includes(type) && !poke.types[0].immune_to.includes(type)
            )
            return [...new Set(strengths)]
        }
    }

    // calculates which types a pokemon is weak to
    calculateWeaknesses = (poke) => {
        if (poke.types.length === 1) {
            return poke.types[0].weak_against
        }
        else {
            let weaknesses = poke.types[0].weak_against
            weaknesses = weaknesses.filter(type =>
                !poke.types[1].strong_against.includes(type) && !poke.types[1].immune_to.includes(type)
            )
            weaknesses = weaknesses.concat(poke.types[1].weak_against)
            weaknesses = weaknesses.filter(type =>
                !poke.types[0].strong_against.includes(type) && !poke.types[0].immune_to.includes(type)
            )
            return [...new Set(weaknesses)]
        }
    }

    //calculates which types a pokemon is immune to
    calculateImmunities = (poke) => {
        if (poke.types.length === 1) {
            return poke.types[0].immune_to
        }
        else {
            let immunities = poke.types[0].immune_to
            immunities = immunities.concat(poke.types[1].immune_to)
            return [...new Set(immunities)]
        }
    }

    render() {
        return (
            <Router>
                <Route exact path="/myteam" render={() => (
                    <TeamInfo currentTeam={this.state.currentTeam}
                        calculateStrengths={this.calculateStrengths}
                        calculateWeaknesses={this.calculateWeaknesses}
                        calculateImmunities={this.calculateImmunities}
                        releasePoke={this.releasePoke} />
                )} />

                <Route exact path="/pokedex" render={() => (
                    <Pokedex pokemons={this.state.pokemons}
                        addPoke={this.addPoke}
                        calculateStrengths={this.calculateStrengths}
                        calculateWeaknesses={this.calculateWeaknesses}
                        calculateImmunities={this.calculateImmunities} />
                )} />


                <div className="mid-container">
                    <Route exact path="/login" render={() => (
                        <Login setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
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