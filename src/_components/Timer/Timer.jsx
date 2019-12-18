import React from 'react';
import './Timer.css';

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      minutes: 3,
      seconds: 0,
    }
  }

  startTimer = () => {

    // avoid accidentally set up timer multiple times
    if (this.myInterval) {
      return
    }

    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      } 
    }, 1000)
  }

  resetTimer = () => {
    clearInterval(this.myInterval);
    this.myInterval = null;
    this.setState({
      minutes: 3,
      seconds: 0
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
    this.myInterval = null;
  }

  render() {
    const minutes = this.state.minutes;
    const seconds = this.state.seconds;
    return (
      <div className="timer">
        <div>
          { minutes === 0 && seconds === 0
            ? <h1>时间到</h1>
            : <h1>剩余时间: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
          }
        </div>
        <div className="timer-btn" onClick={this.startTimer}>开始计时</div>
        <div className="timer-btn" onClick={this.resetTimer}>重置计时</div>
      </div>
    )
  }
}

export default Timer;