import React, { Component } from 'react';
import './App.css';

import Stopwatch from './components/Stopwatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stopwatch />
      </div>
    );
  }
}

export default App;
