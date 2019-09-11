import React from 'react';
import './GuessPic.css';

class GuessPic extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
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

  render() {
    return (
      <div className="guess-pic">
        <iframe
          title="guess-pic"
          src={`http://www.360chengyu.com/ktccy/${this.state.pic}.html`} />
        <div className="prev-btn ctrl-btn" onClick={this.prevPic}>Prev</div>
        <div className="next-btn ctrl-btn" onClick={this.nextPic}>Next</div>
        <input className="input-jump-to" type="text" onChange={this.jumpToPic} value={this.state.pic} />
      </div>
    );
  }
}

export default GuessPic;
