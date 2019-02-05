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
    word: '',
    rows: [],
    cols: [],
  }

  render() {
    console.log(this.state.board)
    console.log(this.state.word)
    console.log(this.state.rows)
    console.log(this.state.cols)
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
            onClick={(e) => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx].selected = !this.state.board[idx].selected),

              word: (this.state.board[idx].selected === true) ? this.state.word + e.target.innerHTML : this.state.word.slice(0, this.state.word.length - 1),

              rows: (this.state.board[idx].selected === true) ? this.state.rows +  this.state.board[idx].row : this.state.rows.slice(0, this.state.rows.length - 1),

              cols: (this.state.board[idx].selected === true) ? this.state.cols +  this.state.board[idx].col : this.state.rows.slice(0, this.state.rows.length - 1),
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 4 && idx <=7).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={(e) => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+4].selected = !this.state.board[idx+4].selected),
              word: (this.state.board[idx+4].selected === true) ? this.state.word + e.target.innerHTML : this.state.word.slice(0, this.state.word.length - 1),
              rows: (this.state.board[idx+4].selected === true) ? this.state.rows +  this.state.board[idx+4].row : this.state.rows.slice(0, this.state.rows.length - 1),

              cols: (this.state.board[idx+4].selected === true) ? this.state.cols +  this.state.board[idx+4].col : this.state.rows.slice(0, this.state.rows.length - 1),
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 8 && idx <=11).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={(e) => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+8].selected = !this.state.board[idx+8].selected),
              word: (this.state.board[idx+8].selected === true) ? this.state.word + e.target.innerHTML : this.state.word.slice(0, this.state.word.length - 1),
              rows: (this.state.board[idx+8].selected === true) ? this.state.rows +  this.state.board[idx+8].row : this.state.rows.slice(0, this.state.rows.length - 1),

              cols: (this.state.board[idx+8].selected === true) ? this.state.cols +  this.state.board[idx+8].col : this.state.rows.slice(0, this.state.rows.length - 1),
            })}
            />)}
          </div>
          <div className="row">
            {this.state.board.filter((x,idx)=> idx >= 12 && idx <=15).map((x, idx) => <Tile key={idx}
            tile={x.tile}
            row={x.row}
            col={x.col}
            selected={x.selected}
            onClick={(e) => this.setState({
              board: Object.assign(
                [],
                this.state.board, this.state.board[idx+12].selected = !this.state.board[idx+12].selected),
              word: (this.state.board[idx+12].selected === true) ? this.state.word + e.target.innerHTML : this.state.word.slice(0, this.state.word.length - 1),

              rows: (this.state.board[idx+12].selected === true) ? this.state.rows +  this.state.board[idx+12].row : this.state.rows.slice(0, this.state.rows.length - 1),

              cols: (this.state.board[idx+12].selected === true) ? this.state.cols +  this.state.board[idx+12].col : this.state.rows.slice(0, this.state.rows.length - 1),
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
