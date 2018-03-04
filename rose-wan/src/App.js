import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import NameForm from './Components/NameForm';
import Pokemon from './Components/Pokemon';
import Loading from './Components/Loading';

// use this to fetch data
const fetchPokemon = idOrName =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`)
    .then(response => response.json())
    .then(pokemonData => ({
      name: pokemonData.name,
      picture: pokemonData.sprites && pokemonData.sprites.front_default
    }));
    // .catch((error) => {console.error(`No Pokemon by ${pokemonData.name} found`)})
    // ;

const fetchPokemonList = () =>
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(response => response.json())
    .then(pokemonData => ({
      results: pokemonData.results,
    }))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
      results: [],
      loading: false,
      error: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit(name) {
    // console.log("submitted: ", name);
    if (!name) {
      this.setState({
        name: null,
        picture: null,
        loading: true,
        error: null
      });
      fetchPokemonList()
      .then(pokemonData =>
        this.setState({
          results: pokemonData.results,
          loading: false
        }))
      return;
    };
    this.setState({
      loading: true,
      error: null,
      results: []
    });
    fetchPokemon(name)
    .then(pokemonData => this.setState({
      name: pokemonData.name,
      picture: pokemonData.picture,
      loading: false,
      error: null
    }));
  }

  // saveSearchTerm = event => {
  //   this.setState({searchTerm: event.target.value});
  // };

  render() {
    let hasData = this.state.name && this.state.picture;
    let pokemonDisplay = hasData && !this.state.loading ? <Pokemon name={this.state.name} picture={this.state.picture} /> : null;
    let loading = this.state.loading ? <Loading /> : null;
    let error = this.state.error;

    return (
      <div className="App">
        <Header text="Gotta Fetch 'em all!" />
        <NameForm handleFormSubmit={this.handleFormSubmit} />
        <ul>{ this.renderList(this.state.results) }</ul>
        { pokemonDisplay }
        { loading }
        { error }
      </div>
    );
  }
  renderList(results) {
    if (!results) return;
    return results.map((singlePokemon, index) => <li key={ index }>{ singlePokemon.name }</li>);
  }
}

export default App;
