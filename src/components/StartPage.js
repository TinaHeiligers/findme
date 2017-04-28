import React from 'react';

// eslint-disable-next-line
class StartPage extends React.Component {
  render() {
    console.log(this.props.gameStarted())
    return(
    <div className={this.props.gameStarted() ? "hidden": "visible"}>
      <h1 className="top">
        Find Me
      </h1>
      <h2 className="top">Find my matching partner in all the cards!</h2>
      <div className="start-buttons">
        <button className="start-easy-game-button" name="easy" onClick={(e) => this.props.restartGame(e.target.name)}>EASY</button>
        <button className="start-medium-game-button" name="medium" onClick={(e) => this.props.restartGame(e.target.name)}>MEDIUM</button>
        <button className="start-hard-game-button" name="hard" onClick={(e) => this.props.restartGame(e.target.name)}>HARD</button>
      </div>
    </div>
    )
  }
}


export default StartPage;
