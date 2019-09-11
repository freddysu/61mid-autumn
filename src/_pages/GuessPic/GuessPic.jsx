import React from 'react';
import './GuessPic.css';

class GuessPic extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      start: false,
      pic: 312
    }
  }

  prevPic = () => {
    this.setState((prevState, props) => {
      return {
        pic: prevState.pic - 1
      }
    })
  }

  nextPic = () => {
    this.setState((prevState, props) => {
      return {
        pic: prevState.pic + 1
      }
    })
  }

  jumpToPic = (evt) => {
    this.setState({
      pic: parseInt(evt.target.value)
    })
  }

  startGame = () => {
    this.setState({
      start: true
    })
  }

  render() {
    return (
      <div id="guess-pic">
        {
          this.state.start ?
          <iframe
            title="guess-pic"
            className="game-content"
            src={`https://www.360chengyu.com/ktccy/${this.state.pic}.html`} /> :
          <div>
            <div className="game-name">看圖猜成語</div>
            <span className="g-card" onClick={this.startGame}>開始遊戲</span>
          </div>
        }
        <div className="g-prev-btn g-ctrl-btn unselectable" onClick={this.prevPic}>Prev</div>
        <div className="g-next-btn g-ctrl-btn unselectable" onClick={this.nextPic}>Next</div>
        <input
          className="g-input-jump-to"
          type="text"
          onChange={this.jumpToPic}
          value={this.state.pic} />
      </div>
    );
  }
}

export default GuessPic;
