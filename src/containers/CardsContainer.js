import React from 'react';
// import Card from './Card';

class CardsContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        <button className="start-game-button"onClick={(e) => console.log(e.target)}>buttonText</button>

        <ul className="cards-container wrap space-between">
        CARDS</ul>
        <br/>
        <div className="game-over" value={this.props.gameOver}>
          <div>gameOver ? "GAME OVER! " : ""</div>
          <div className="winner">renderWinner</div>
        </div>
      </div>
      )
  }
}

export default CardsContainer;
