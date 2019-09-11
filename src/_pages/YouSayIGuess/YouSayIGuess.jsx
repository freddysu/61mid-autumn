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
    return (
      <div id="you-say-i-guess">
        {
          this.state.start ?
          <span className="item" onClick={this.pauseGame}>{words[this.state.item]}</span> :
          <span className="item" onClick={this.startGame}>開始遊戲</span>
        }
        <div className="prev-btn ctrl-btn" onClick={this.prevItem}>Prev</div>
        <div className="next-btn ctrl-btn" onClick={this.nextItem}>Next</div>
        <input
          className="input-jump-to"
          type="text"
          onChange={this.jumpToItem}
          value={this.state.item} />
      </div>
    )
  }
}

export default YouSayIGuess;
