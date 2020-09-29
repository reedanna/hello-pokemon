import React from 'react'
import Pokedex from './Pokedex.js';

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            pokemons: [],
            myteam: false,
            pokedex: false
        }
    }
componentDidMount(){
    fetch('http://localhost:3001/pokemons').then(res=>res.json()).then(json=>this.setState({pokemons: json}))
}

    render(){
        return(
            <>
            {this.state.myteam? 
            "myteam"
            : null}
            {this.state.pokedex?
            <Pokedex pokemons={this.state.pokemons}/>
            : null}
            <div className="c">
                <div className="pokeball" onClick={()=>this.setState({myteam: true, pokedex: false})}>My Team</div>
            </div>
            <div className="d">
                <div className="pokeball" onClick={()=>this.setState({pokedex: true, myteam: false})}>Pokedex</div>
            </div>
            <div className="f">
                <div className="pokeball">Logout</div>
            </div>
            </>
        )
    }

}

export default Main;