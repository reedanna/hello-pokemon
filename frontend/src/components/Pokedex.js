import React from 'react';
import PokedexList from './PokedexList.js';

class Pokedex extends React.Component{
    constructor(){
        super();
        this.state={
            pokeOnpokedex: [],
            strong_against: false,
            weak_against: false
        }
    }

    pokeInfo = (poke) => {
        this.setState({pokeOnpokedex: poke})
        console.log(poke.types)
    }
    

render(){
    const p = this.state.pokeOnpokedex
    return(
        <>
        <div className="left-container">
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
                <div id="pokedex">
                <div className="sensor">
                <button></button>
                </div>
                <div className="camera-display">
                {p.img_url ?
                <img src={p.img_url} alt={p.name}/>
                : null
                }
                </div>
                <div className="divider"></div>
                <div className="stats-display">
                <h4>{p.name}</h4>
                {this.state.strong_against?
                <h5>strong against</h5>
                :null}
                {this.state.weak_against?
                <h5>weak against</h5>
                :null}
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
                    <button className="a" onClick={()=>this.props.addPoke(this.state.pokeOnpokedex)}>Add to my team</button>
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
                    <button className="level-button"></button>
                    <button className="level-button"></button>
                    <button className="level-button"></button>
                    <button className="level-button"></button>
                    <button className="pokedex-mode black-button" onClick={()=>this.setState({strong_against: true, weak_against: false})}>Strong Against</button>
                    <button className="game-mode black-button" onClick={()=>this.setState({weak_against: true, strong_against: false})}>Weak Against</button>
                
                </div>
            
            </div>
            </div>

            <div className="pokedex-right-container">
            <ul className="pokedexUl">
                {this.props.pokemons.map(pokemon=> <PokedexList key={pokemon.id} pokemon={pokemon} pokeInfo={this.pokeInfo}/>)}
                </ul>
                
            </div>
        </>
    )
}
}
export default Pokedex;