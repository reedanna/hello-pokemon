import React from 'react'
import Pokedex from './Pokedex.js';
import MyTeam from './MyTeam.js';
import Index from './Index.js';

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            currentUser: "",
            pokemons: [],
            myteam: false,
            pokedex: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/pokemons')
            .then(res => res.json())
            .then(json => {
                this.setState({ pokemons: json })
            })
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user,
            myteam: false,
            pokedex: false
        })
    }

    render() {
        return (
            <>
                {!this.state.myteam && !this.state.pokedex && this.state.currentUser !== "" ?
                    <div>
                        <p>Welcome, {this.state.currentUser.name}!</p>
                    </div>
                    :
                    null}
                {this.state.myteam ?
                    <MyTeam />
                    : null}
                {this.state.pokedex ?
                    <Pokedex pokemons={this.state.pokemons} />
                    : null}
                {this.state.currentUser === "" ?
                    <Index setCurrentUser={this.setCurrentUser} />
                    :
                    <>
                        <div className="c">
                            <div className="pokeball" onClick={() => this.setState({ myteam: true, pokedex: false })}>My Team</div>
                        </div>
                        <div className="d">
                            <div className="pokeball" onClick={() => this.setState({ pokedex: true, myteam: false })}>Pokedex</div>
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