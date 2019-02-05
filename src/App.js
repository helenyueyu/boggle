import React, { Component } from 'react';
import './App.css';

import makeBoard from './components/Model'

import Title from './components/Title'
import Tile from './components/Tile'

class App extends Component {
  componentDidMount() {
    let boggle = []
    let boggleBoard = makeBoard()
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        boggle.push({
          row: i+1,
          col: j+1,
          tile: boggleBoard[i][j]
        })
      }
    }
    this.setState({
      board: boggle
    })
  }
  state = {
    board: []
  }
  render() {
    return (
      <React.Fragment>
      <div className="App">
        <Title/>
        <br/>
        <div className="board">
          {this.state.board.filter((x,idx)=> idx >= 0 && idx <=3).map((x, idx) => <Tile key={idx}
          tile={x.tile} />)}
          {this.state.board.filter((x,idx)=> idx >= 4 && idx <=7).map((x, idx) => <Tile key={idx}
          tile={x.tile} />)}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
