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
      <div className="guess-pic">
        {
          this.state.start ?
          <iframe
            title="guess-pic"
            className="game-content"
            src={`http://www.360chengyu.com/ktccy/${this.state.pic}.html`} /> :
          <span className="start" onClick={this.startGame}>開始遊戲</span>
        }
        <div className="prev-btn ctrl-btn" onClick={this.prevPic}>Prev</div>
        <div className="next-btn ctrl-btn" onClick={this.nextPic}>Next</div>
        <input className="input-jump-to" type="text" onChange={this.jumpToPic} value={this.state.pic} />
      </div>
    );
  }
}

export default GuessPic;
