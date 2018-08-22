import React from 'react'

const Controls = (props) => {
  return(
    <div id="controls">
      <button onClick={props.handleClick}>{props.timerRunning ? 'Pause' : 'Start'}</button>
      <button onClick={props.handleReset}>Reset</button>
    </div>
  )
}

export default Controls