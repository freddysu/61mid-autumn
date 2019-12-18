import React from 'react';
import words from './words';
import './YouSayIGuess.css';

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
    if (this.state.item >= words.length - 1) {
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
    return (
      <div id="you-say-i-guess" className="g-game">
        <div className={'g-game-name' + (this.state.start ? ' hide' : '')}>你畫(說)我猜</div>
        {
          this.state.start ?
          <span className="g-card" onClick={this.pauseGame}>{words[this.state.item]}</span> :
          <span className="g-card" onClick={this.startGame}>開始遊戲</span>
        }
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
