import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Gotta Fetch em all!" />
      </div>
    );
  }
}

export default App;
