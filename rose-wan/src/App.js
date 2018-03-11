import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import NameForm from './Components/NameForm';
import Pokemon from './Components/Pokemon';
import Loading from './Components/Loading';

import { connect } from 'react-redux';

import { fetchPokemon, fetchPokemonList } from './actions/index';


const mapStateToProps = (state, ownProps) => {
  return {
    name: state.name,
    picture: state.picture,
    loading: state.loading,
    error: state.error,
    results: state.results
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchPokemon: nameOrId => {
      dispatch(fetchPokemon(nameOrId))
    },
    onFetchPokemonList: () => {
      dispatch(fetchPokemonList())
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(name) {
    if (!name) {
      this.props.onFetchPokemonList();
    } else {
      this.props.onFetchPokemon(name);
    }
  }

  render() {
    let hasData = this.props.name && this.props.picture;
    let pokemonDisplay = hasData && !this.props.loading ? <Pokemon name={this.props.name} picture={this.props.picture} /> : null;
    let loading = this.props.loading ? <Loading /> : null;
    let error = this.props.error;

    return (
      <div className="App">
        <Header text="Gotta Fetch 'em all!" />
        <NameForm handleFormSubmit={this.handleFormSubmit} />
        <ul>{ this.renderList(this.props.results) }</ul>
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

const ConnectPokemonApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectPokemonApp;
