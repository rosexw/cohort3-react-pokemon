import React from 'react';

const Pokemon = (props) => {
  return (
    <div className="PokemonDetails">
      <h2>Pokemon Name: {props.name} </h2>
      <img src={props.picture} alt="Pokemon picture"></img>
    </div>
  );
}

export default Pokemon;
