import React, { Component } from 'react'

const tileStyle = {
  border: '2px solid black',
  fontSize: '60px',
  width: '5rem',
  height: '5rem',
  fontFamily: "'Russo One', sans-serif"
}

const tileSelectedStyle = {
  border: '2px solid black',
  fontSize: '60px',
  width: '5rem',
  height: '5rem',
  fontFamily: "'Russo One', sans-serif",
  backgroundColor: 'lime'
}

class Tile extends Component {
  state = {
    selected: this.props.selected
  }
  handleClick = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    return (
      <div key={this.props.idx}
        style={(this.props.selected) ? tileSelectedStyle : tileStyle}
        onClick={this.props.onClick}>
      {this.props.tile}
      </div>
    )
  }
}


export default Tile
