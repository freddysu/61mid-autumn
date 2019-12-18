import React from 'react';
import Header from '../../_components/Header/Header';
import ScoreCounter from '../../_components/ScoreCounter/ScoreCounter';
import Rundown from '../Rundown/Rundown';
import GuessPic from '../GuessPic/GuessPic';
import QandA from '../QandA/QandA';
import YouSayIGuess from '../YouSayIGuess/YouSayIGuess';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1
    }
  }

  prevPage = () => {
    if (this.state.currentPage === 0) {
      return
    }

    this.setState((prevState, props) => {
      return {
        currentPage: prevState.currentPage - 1
      }
    })
  }

  nextPage = () => {
    if (this.state.currentPage === 4) {
      return
    }

    this.setState((prevState, props) => {
      return {
        currentPage: prevState.currentPage + 1
      }
    })
  }

  renderPage() {
    switch (this.state.currentPage) {
      default:
      case 1:
        return <Rundown />
      case 2:
        return <QandA />
      case 3:
        return <GuessPic />
      case 4:
        return <YouSayIGuess />
    }
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="content-wrap">
          <div className="controls unselectable">
            <span onClick={this.prevPage}>{'←'}</span>
            <span onClick={this.nextPage}>{'→'}</span>
          </div>
          {this.renderPage()}
          <ScoreCounter />
        </div>
      </div>
    );
  }
}

export default Home;
