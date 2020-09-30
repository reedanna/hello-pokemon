import React, { Component } from 'react';
import TeamPokemon from './TeamPokemon.js';
import Pokemon from './Pokemon.js';

export default class TeamInfo extends Component {
  constructor(){
    super();
    this.state={
      pokemonpage: false,
      renderPoke: []
    }
  }
  
  pokemonInfo = (p) => {
    this.setState({renderPoke: p, pokemonpage: true})
  }
    render() {
      return (
        <>
        <div className="pokemon-right-container">
          {this.state.pokemonpage?
          <Pokemon pokemon={this.state.renderPoke} /> 
          : null}
        </div>
        <div className="team-left-container">
          <h2 className="myteamtext">My Team</h2>
          {this.props.myteam.map(pokemon=> <TeamPokemon key={pokemon.id} pokemon={pokemon} pokemonInfo={this.pokemonInfo}/>)}
        </div>
        </>
      )
    }
  }