import React from 'react';
import words from './words';
import './YouSayIGuess.css';
import Timer from '../../_components/Timer/Timer'

class YouSayIGuess extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      start: false,
      item: 0
    }
  }

  prevItem = () => {
    if (this.state.item === 0) {
      return
    }

    this.setState((prevState, props) => {
      return {
        item: prevState.item - 1
      }
    })
  }

  nextItem = () => {
    if (this.state.item > words.length) {
      return
    }

    this.setState((prevState, props) => {
      return {
        item: prevState.item + 1
      }
    })
  }

  jumpToItem = (evt) => {
    this.setState({
      item: parseInt(evt.target.value)
    })
  }

  startGame = () => {
    this.setState({
      start: true
    })
  }

  pauseGame = () => {
    this.setState({
      start: false
    })
  }

  render() {
    const minutes = this.state.minutes;
    const seconds = this.state.seconds;
    return (
      <div id="you-say-i-guess">
        <div className={'game-name' + (this.state.start ? ' hide' : '')}>你說我猜</div>
        {
          this.state.start ?
          <span className="g-card" onClick={this.pauseGame}>{words[this.state.item]}</span> :
          <span className="g-card" onClick={this.startGame}>開始遊戲</span>
        }
        <Timer/>
        <div className="g-prev-btn g-ctrl-btn unselectable" onClick={this.prevItem}>Prev</div>
        <div className="g-next-btn g-ctrl-btn unselectable" onClick={this.nextItem}>Next</div>
        <input
          className="g-input-jump-to"
          type="text"
          onChange={this.jumpToItem}
          value={this.state.item} />
      </div>
    )
  }
}

export default YouSayIGuess;
