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
          tile: boggleBoard[i][j],
          selected: false
        })
      }
    }
    this.setState({
      board: boggle
    })
  }

  state = {
    board: [],
    word: ''
  }

  render() {
    console.log(this.state.board)
    console.log(this.state.word)
    console.log(this.state.board.filter(x => x.selected === true).map(x => x.tile))
    return (
      <React.Fragment>
      <div className="App">
        <Title/>
        <br/>
        <div className="board">
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 0 && idx <=3).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={() => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx].selected = !this.state.board[idx].selected),
              word: [...this.state.board.filter(x => x.selected === true).map(x => x.tile)]
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 4 && idx <=7).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={() => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+4].selected = !this.state.board[idx+4].selected)
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 8 && idx <=11).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={() => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+8].selected = !this.state.board[idx+8].selected)
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 12 && idx <=15).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={() => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+12].selected = !this.state.board[idx+12].selected)
            })}
            />)}
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
