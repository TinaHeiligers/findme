import React from 'react'
import { connect } from 'react-redux'
import StartPage from './components/StartPage';
import { restartGame, addPlayer } from './action-creators'

const mapStateToProps = (state) => {
  return {
// return stuff we need
    players: state.players
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch actions we need
    onStartGame: (difficulty) => {
      dispatch(restartGame(difficulty))
    },

    addPlayer: dispatch(addPlayer)
  }
}
const welcome = () => {
  <StartPage />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(welcome)
