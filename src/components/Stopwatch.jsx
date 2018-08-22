import React, { Component } from 'react'

import Timer from './Timer'
import Controls from './Controls'

class Stopwatch extends Component {
  constructor(){
    super()

    this.state = {
      timerRunning: false,
      time: 0
    }
  }

  handleClick = () => {
    this.setState(state => {
      if(state.timerRunning){
        clearInterval(this.timer)
      } else {
        let startTime = Date.now() - this.state.time
        this.timer = setInterval(() => {
          this.setState({ time: Date.now() - startTime })
        }, 50)
      }
      return {timerRunning: !state.timerRunning}
    })
  }

  handleReset = () => {
    clearInterval(this.timer)
    this.setState({
      timerRunning: false,
      time: 0
    })
  }

  render(){
    return(
      <div id='stopwatch'>
        <h1>Stopwatch</h1>
        <Timer
          time={this.state.time}
          handleClick={this.handleClick}
        />
        <Controls
          timerRunning={this.state.timerRunning}
          handleClick={this.handleClick}
          handleReset={this.handleReset}
        />
      </div>
    )
  }
}

export default Stopwatch