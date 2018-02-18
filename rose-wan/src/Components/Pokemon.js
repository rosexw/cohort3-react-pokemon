import React from 'react';

const Pokemon = (props) => {
  return (
    <div className="PokemonDetails">
      <h3 className="display-name">Pokemon Name: {props.name} </h3>
      <img className="display-image" src={props.picture} alt="Pokemon picture"></img>
    </div>
  );
}

export default Pokemon;
