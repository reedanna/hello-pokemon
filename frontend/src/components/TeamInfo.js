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

  releasePoke = (p) => {
    let filteredArray = this.state.renderPoke.filter(poke => poke.id !== p.id)
    this.setState({renderPoke: filteredArray});
  }


    render() {
      return (
        <>
        <div className="pokemon-right-container">
          {this.state.pokemonpage?
          <Pokemon 
          pokemon={this.state.renderPoke} 
          releasePoke={this.releasePoke}
          calculateStrengths={this.props.calculateStrengths}
          calculateWeaknesses={this.props.calculateWeaknesses}
          calculateImmunities={this.props.calculateImmunities} /> 
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