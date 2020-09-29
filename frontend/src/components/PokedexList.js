import React from 'react';

class PokedexList extends React.Component{
render(){
    const pokemon = this.props.pokemon
    return(
        <>
        <ul className="pokedexUl">
            <li><img src={pokemon.img_url} alt="poke"/>{pokemon.name}</li>
        </ul>
        </>
    )
}
}
export default PokedexList;
