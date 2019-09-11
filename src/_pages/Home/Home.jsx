import React from 'react';
import Header from '../../_components/Header/Header';
import Rundown from '../Rundown/Rundown';
import GuessPic from '../GuessPic/GuessPic';
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
    if (this.state.currentPage === 3) {
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
        return <GuessPic />
      case 3:
        return <YouSayIGuess />
    }
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="content-wrap">
          <div className="controls">
            <span onClick={this.prevPage}>{'←'}</span>
            <span onClick={this.nextPage}>{'→'}</span>
          </div>
          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default Home;