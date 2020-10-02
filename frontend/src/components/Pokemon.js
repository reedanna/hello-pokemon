import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const p = this.props.pokemon
    console.log(this.props.calculateStrengths(p))
    return (
      <>
        <figure className="pokemon_card">
          <div className="card__image-container">
            <img src={p.img_url} alt="poke" />
          </div>
          <figcaption className="card__caption">
            <h1 className="card__name">{p.name}</h1>
            <div className="card__desc">
              <h5>TYPES</h5>

              {p.types.map(type =>
                <p className="card__type" key={type.id}>
                  {type.name}&nbsp;
                  </p>)}

              <h5>STRONG AGAINST</h5>

              {this.props.calculateStrengths(p).map((type, index) =>
                <p className="card__type" key={index} >
                  {type}&nbsp;
                </p>
              )}

              <h5>WEAK AGAINST</h5>

              {this.props.calculateWeaknesses(p).map((type, index) =>
                <p className="card__type" key={index} >
                  {type}&nbsp;
                </p>
              )}

              <h5>IMMUNE TO</h5>

              {this.props.calculateImmunities(p).map((type, index) =>
                <p className="card__type" key={index} >
                  {type}&nbsp;
                </p>
              )}

            </div>
          </figcaption>
          <button className="releaseButton" onClick={() => this.props.releasePoke(p)}>RELEASE</button>
        </figure>

      </>
    )
  }
}