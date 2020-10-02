import React from 'react';
import PokedexList from './PokedexList.js';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            visiblePokes: [],
            pokeOnpokedex: [],
            display: "",
            strengths: [],
            weaknesses: [],
            immunities: []
        }
    }

    componentDidMount() {
        this.setState({
            visiblePokes: this.props.pokemons
        })
    }

    //shows Pokemon on left side of Pokedex
    pokeInfo = (poke) => {
        this.setState({
            pokeOnpokedex: poke,
            display: "Name"
        })
    }

    //filters Pokemon based on search
    searchPokemon = (e) => {
        this.setState({
            visiblePokes: this.props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }

    //display's a pokemon's type resistances on the Pokedex
    showStrengths = (poke) => {
        this.setState({
            display: "Strong Against",
            strengths: this.props.calculateStrengths(poke)
        })
    }

    //display's a pokemon's type weaknesses on the Pokedex
    showWeaknesses = (poke) => {
        this.setState({
            display: "Weak Against",
            weaknesses: this.props.calculateWeaknesses(poke)
        })
    }

    //displays a pokemon's immunities on the Pokedex
    showImmunities = (poke) => {
        this.setState({
            display: "Immune To",
            immunities: this.props.calculateImmunities(poke)
        })

    }

    render() {
        const p = this.state.pokeOnpokedex
        return (
            <>
                <div className="left-container">
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
                    <div id="pokedex">
                        <div className="sensor">
                            <button></button>
                        </div>
                        <div className="camera-display">
                            {p.img_url ?
                                <img src={p.img_url} alt={p.name} />
                                : null
                            }
                        </div>
                        <div className="divider"></div>
                        <div className="stats-display">
                            <h4>{this.state.display}:</h4>
                            {this.state.display === "Name" ?
                                <h4>{p.name}</h4>
                                : null}
                            {this.state.display === "Strong Against" ?
                                this.state.strengths.map((type, index) =>
                                    <h5 className="type" key={index} >
                                        {type}&nbsp;
                                    </h5>
                                )
                                : null}
                            {this.state.display === "Weak Against" ?
                                this.state.weaknesses.map((type, index) =>
                                    <h5 className="type" key={index} >
                                        {type}&nbsp;
                                    </h5>
                                )
                                : null}
                            {this.state.display === "Immune To" ?
                                this.state.immunities.map((type, index) =>
                                    <h5 className="type" key={index} >
                                        {type}&nbsp;
                                    </h5>
                                )
                                : null}
                        </div>
                        <div className="type-pad"><p>TYPES</p>
                            {p.types ?
                                p.types.map(type =>
                                    <h5 className="type" key={type.id}>
                                        {type.name}&nbsp;
                        </h5>)
                                :
                                null
                            }
                        </div>
                        <div className="botom-actions">
                            <div id="actions">
                                <button className="a" onClick={() => this.props.addPoke(this.state.pokeOnpokedex)}>+</button>
                            </div>
                            <div id="cross">
                                <button className="cross-button up"></button>
                                <button className="cross-button right"></button>
                                <button className="cross-button down"></button>
                                <button className="cross-button left"></button>
                                <div className="cross-button center"> </div>
                            </div>
                        </div>

                        <div className="bottom-modes">
                            <button className="level-button" onClick={() => this.pokeInfo(p)}>Name</button>
                            <button className="level-button" onClick={() => this.showStrengths(p)}>Strong</button>
                            <button className="level-button" onClick={() => this.showWeaknesses(p)}>Weak</button>
                            <button className="level-button" onClick={() => this.showImmunities(p)}>Immune</button>
                            <input className="pokedex-mode black-button" onChange={this.searchPokemon}></input>
                            <button className="game-mode black-button">Search</button>

                        </div>

                    </div>
                </div>

                <div className="pokedex-right-container">
                    <ul className="pokedexUl">
                        {this.state.visiblePokes.map(pokemon => <PokedexList key={pokemon.id} pokemon={pokemon} pokeInfo={this.pokeInfo} />)}
                    </ul>

                </div>
            </>
        )
    }
}
export default Pokedex;