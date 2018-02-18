import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import NameForm from './Components/NameForm';
import Pokemon from './Components/Pokemon';

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites && pokemonData.sprites.front_default
    }));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
      loading: false
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit(name) {
    // console.log("submitted: ", name);
    if (!name) {
      return;
    }
    this.setState({
      loading: true
    });
    fetchPokemon(name)
    .then(pokemonData => this.setState({
      name: pokemonData.name,
      picture: pokemonData.picture,
      loading: false
    }));
  }

  render() {
    let hasData = this.state.name && this.state.picture;
    let pokemonDisplay = hasData && !this.state.loading ? <Pokemon name={this.state.name} picture={this.state.picture} /> : null;
    let loading = this.state.loading ? "loading..." : null;

    return (
      <div className="App">
        <Header text="Gotta Fetch 'em all!" />
        <NameForm handleFormSubmit={this.handleFormSubmit} />
        { pokemonDisplay }
        { loading }
      </div>
    );
  }
}

export default App;
