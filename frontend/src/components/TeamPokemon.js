import React, { Component } from 'react';

export default class TeamPokemon extends Component {
    render() {
      const p = this.props.pokemon
      return (
        <>
          <div className="pokemon">
            <div className="img-container" onClick={()=>this.props.pokemonInfo(p)}>
              <img src={ p.img_url }alt="poke" />
              <div className="info">
                <h3 className="name">{p.name}</h3>
              </div>
            </div>
          </div>
        </>
      )
    }
  }