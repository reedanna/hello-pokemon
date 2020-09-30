import React from 'react';

class PokedexList extends React.Component{
render(){
    const poke = this.props.pokemon
    return(
        <>

            <li><img src={poke.img_url} alt="poke" onClick={()=>this.props.pokeInfo(poke)}/>{poke.name}</li>

        </>
    )
}
}
export default PokedexList;
