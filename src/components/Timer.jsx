import React from 'react'

const Timer = (props) => {
  return(
    <div id="timer" onClick={props.handleClick}>
      <p>{props.time}</p>
    </div>
  )
}

export default Timer