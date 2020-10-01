import React from 'react';
import PokedexList from './PokedexList.js';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pokeOnpokedex: [],
            display: "",
            strengths: [],
            weaknesses: [],
            immunities: []
        }
    }

    pokeInfo = (poke) => {
        this.setState({
            pokeOnpokedex: poke,
            display: "Name"
        })
    }

    calculateStrengths = (poke) => {
        this.setState({
            display: "Strong Against"
        })
        if (poke.types.length === 1) {
            console.log(poke.types[0].strong_against)
            this.setState({
                strengths: poke.types[0].strong_against
            })
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
            console.log([...new Set(strengths)])
            this.setState({
                strengths: [...new Set(strengths)]
            })
        }
    }

    calculateWeaknesses = (poke) => {
        this.setState({
            display: "Weak Against"
        })
        if (poke.types.length === 1) {
            console.log(poke.types[0].weak_against)
            this.setState({
                weaknesses: poke.types[0].weak_against
            })
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
            console.log([...new Set(weaknesses)])
            this.setState({
                weaknesses: [...new Set(weaknesses)]
            })
        }
    }

    calculateImmunities = (poke) => {
        this.setState({
            display: "Immune To"
        })
        if (poke.types.length === 1) {
            console.log(poke.types[0].immune_to)
            this.setState({
                immunities: poke.types[0].immune_to
            })
        }
        else {
            let immunities = poke.types[0].immune_to
            immunities = immunities.concat(poke.types[1].immune_to)
            console.log([...new Set(immunities)])
            this.setState({
                immunities: [...new Set(immunities)]
            })
        }
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
                            <button className="level-button" onClick={() => this.calculateStrengths(p)}>Strong</button>
                            <button className="level-button" onClick={() => this.calculateWeaknesses(p)}>Weak</button>
                            <button className="level-button" onClick={() => this.calculateImmunities(p)}>Immune</button>
                            <button className="pokedex-mode black-button"></button>
                            <button className="game-mode black-button"></button>

                        </div>

                    </div>
                </div>

                <div className="pokedex-right-container">
                    <ul className="pokedexUl">
                        {this.props.pokemons.map(pokemon => <PokedexList key={pokemon.id} pokemon={pokemon} pokeInfo={this.pokeInfo} />)}
                    </ul>

                </div>
            </>
        )
    }
}
export default Pokedex;