import React from 'react';
import questions from './questions';
import './QandA.css';

class QandA extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      start: false,
      item: 0
    }
  }

  startGame = () => {
    this.setState({
      start: true
    })
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
    if (this.state.item >= questions.length - 1) {
      return
    }

    this.setState((prevState, props) => {
      return {
        item: prevState.item + 1
      }
    })
  }

  render() {
    return (
      <div id="q-and-a" className="g-game">
        <div>
          <div className="g-game-name">XMAS Facts</div>
          {
            this.state.start ?
            <div className="question">{questions[this.state.item].question}</div> :
            <span className="g-card" onClick={this.startGame}>開始遊戲</span>
          }
        </div>
        <div className="g-prev-btn g-ctrl-btn unselectable" onClick={this.prevItem}>Prev</div>
        <div className="g-next-btn g-ctrl-btn unselectable" onClick={this.nextItem}>Next</div>
      </div>
    )
  }
}

export default QandA
