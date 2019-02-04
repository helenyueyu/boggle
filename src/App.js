import React, { Component } from 'react';
import './App.css';

import Tile from './components/Tile'

class App extends Component {
  render() {
    let array = []
    for (let i = 0; i < 16; i++) {
      (i % 4 == 0) ? array.push(<React.Fragment><Tile /><br/><br/></React.Fragment>) : array.push(<Tile/>)
    }
    return (
      <div className="App">
        {array}
      </div>
    );
  }
}

export default App;
