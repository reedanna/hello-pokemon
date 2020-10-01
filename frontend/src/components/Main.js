import React from 'react'
import Pokedex from './Pokedex.js';
import TeamInfo from './TeamInfo.js';
import Index from './Index.js';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            pokemons: [],
            myteampage: false,
            pokedexpage: false,
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
            currentUser: user,
            myteampage: false,
            pokedexpage: false
        })
    }

    addPoke = (poke) => {
        if (this.state.myteam.length < 6){
        this.setState({myteam: [...this.state.myteam, poke]})
        }
    }

    render() {
        return (
            <>
                {!this.state.myteampage && !this.state.pokedexpage && this.state.currentUser !== "" ?
                    <div>
                        <p>Welcome, {this.state.currentUser.name}!</p>
                    </div>
                    :
                    null}
                {this.state.myteampage? 
                <TeamInfo myteam={this.state.myteam}/>
                : null}
                {this.state.pokedexpage?
                <Pokedex pokemons={this.state.pokemons} addPoke={this.addPoke}/>
                : null}
                {this.state.currentUser === "" ?
                    <Index setCurrentUser={this.setCurrentUser} />
                    :
                    <>
                        <div className="c">
                            <div className="pokeball" onClick={() => this.setState({ myteampage: true, pokedexpage: false })}>My Team</div>
                        </div>
                        <div className="d">
                            <div className="pokeball" onClick={() => this.setState({ pokedexpage: true, myteampage: false })}>Pokedex</div>
                        </div>
                        <div className="f">
                            <div className="pokeball" onClick={() => this.setCurrentUser("")}>Logout</div>
                        </div>
                    </>
                }
            </>
        )
    }

}

export default Main;