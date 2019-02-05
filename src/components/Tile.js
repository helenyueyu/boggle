import React from 'react'

const tileStyle = {
  border: '2px solid black',
  fontSize: '60px',
  width: '5rem',
  height: '5rem',
  fontFamily: "'Russo One', sans-serif"
}

const Tile = ({idx, tile}) => (
  <div key={idx} style={tileStyle} onClick={() => console.log(tile)}>
    {tile}
  </div>
)

export default Tile
