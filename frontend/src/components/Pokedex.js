import React from 'react';
import PokedexList from './PokedexList.js';

class Pokedex extends React.Component{
    

render(){
    return(
        <>
        <div className="left-container">
         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Press+Start+2P" />
                <div id="pokedex">
                <div className="sensor">
                <button></button>
                </div>
                <div className="camera-display">
                <img src="" alt="poke"/>
                </div>
                <div className="divider"></div>
                <div className="stats-display">
                <h2>Charmander</h2>
                <h3>Abilities</h3>
                <ul>
                    <li>Solar-power</li>
                    <li>Blaze</li>
                </ul>
                <h3>Moves</h3>
                <ul>
                    <li>dragon-rage</li>
                    <li>dragon-breath</li>
                    <li>dragon-claw</li>
                </ul>
                </div>
                <div className="botom-actions">
                <div id="actions">
                    <button className="a"></button>
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
                
                    <button className="pokedex-mode black-button">Front</button>
                    <button className="game-mode black-button">Back</button>
                
                </div>
            
            </div>
            </div>

            <div className="pokedex-right-container">
                {this.props.pokemons.map(pokemon=> <PokedexList key={pokemon.id} pokemon={pokemon} />)}
                
            </div>
        </>
    )
}
}
export default Pokedex;