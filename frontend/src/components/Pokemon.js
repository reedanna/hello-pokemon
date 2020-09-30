import React, { Component } from 'react';

export default class Pokemon extends Component {
    render() {
      const p = this.props.pokemon
      return (
        <>
        <figure className="pokemon_card">
          <div className="card__image-container">
            <img src={p.img_url} alt="Eevee" />
          </div>
          <figcaption className="card__caption">
            <h1 className="card__name">{p.name}</h1>
          </figcaption>
      </figure>

        </>
      )
    }
  }