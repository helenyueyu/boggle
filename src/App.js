import React, { Component } from 'react';
import './App.css';

import makeBoard from './components/Model'
import Tile from './components/Tile'

class App extends Component {
  state = {
    board: makeBoard()
  }
  render() {
    return (
      <div className="App">
        {this.state.board.map(x => <li>{x}</li>)}
      </div>
    );
  }
}

export default App;
