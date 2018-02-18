import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import NameForm from './Components/NameForm';

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`http://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites.front_default
    }));

class App extends Component {
  handleFormSubmit(name) {
    console.log("submitted: ", name);
  }

  render() {
    return (
      <div className="App">
        <Header text="Gotta Fetch 'em all!" />
        <NameForm handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default App;
