import React from 'react'
import Tile from './Tile'

const tileRowStyle = {

}

const TileRow = ({ idx, row }) => {
  return (
    <div style={tileRowStyle}>
      {row.map((x, idx) => <Tile key={idx} idx={idx} tile={x}/>)}
    </div>
  )
}

export default TileRow
