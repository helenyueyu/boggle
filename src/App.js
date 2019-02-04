import React, { Component } from 'react';
import './App.css';

import makeBoard from './components/Model'

import Title from './components/Title'
import TileRow from './components/TileRow'

class App extends Component {
  state = {
    board: makeBoard()
  }
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Title/>
        <br/>
        <div className="board">
          {this.state.board.map((x, idx) => <TileRow key={idx} row={x}/>)}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
