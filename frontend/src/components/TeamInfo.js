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
          <Pokemon 
          pokemon={this.state.renderPoke} 
          releasePoke={this.props.releasePoke}
          calculateStrengths={this.props.calculateStrengths}
          calculateWeaknesses={this.props.calculateWeaknesses}
          calculateImmunities={this.props.calculateImmunities} /> 
          : null}
        </div>
        <div className="team-left-container">
          <h2 className="myteamtext">My Team</h2>
          {this.props.currentTeam.pokemon_teams.map(pokemon_team => <TeamPokemon key={pokemon_team.id} pokemon={pokemon_team.pokemon} pokemonInfo={this.pokemonInfo}/>)}
        </div>
        </>
      )
    }
  }