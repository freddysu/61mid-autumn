import React from 'react'
import './ScoreCounter.css'

const names = [
  'Alex',
  'Alvin',
  'Doris',
  'Eric',
  'Elli',
  'Freddy',
  'Joyce',
  'Katie',
  'Kelly',
  'Louie',
  'Renee',
  'Ring',
  'Scott',
  'Steph',
  'Sophy',
  'Winson'
]

const initScores = names.reduce((acc, name) => {
  acc[name] = 0
  return acc
}, {})

class ScoreCounter extends React.Component {

  constructor(props) {
    super(props)
    this.state = JSON.parse(localStorage.getItem('scores')) || initScores
  }

  updateScore = (evt, diff) => {
    const name = evt.target.dataset.name
    this.setState((prevState, props) => {
      const updatedState = {
        ...prevState,
        [name]: prevState[name] + diff
      }
      localStorage.setItem('scores', JSON.stringify(updatedState))
      return updatedState
    })
  }

  addScore = evt => {
    this.updateScore(evt, 1)
  }

  minusScore = evt => {
    this.updateScore(evt, -1)
  }

  render() {
    const scores = this.state
    return (
      <div id="score-counter">
        <ul className="unselectable">
          {names.map(name => {
            return (
              <li key={name}>
                <font data-name={name} className="score" onClick={this.minusScore}>{scores[name]}</font>
                <span data-name={name} onClick={this.addScore}>{name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ScoreCounter
