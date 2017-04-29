import React from 'react';
// import Card from './Card';

class CardsContainer extends React.Component {
  constructor() {
    super();
    this.renderCards = this.renderCards.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

//this handleClick event is in render cards
  handleClick(e, card) {
    e.preventDefault();
    console.log(card.image);
    if(card.matched) {
      e.currentTarget.style.backgroundColor = 'red';
      console.log("already matched");
      return;
    }
    this.props.selectCard(card);
    this.props.selectedCardsCheck();
  }
  cardClassName(card) {
    let array = ["card"];
    if (card.selected) {
      array.push("selected")
    } else if (card.matched) {
      array.push("matched")
    }
    return array.join(" ");
  }

  renderCards(card, idx) {

    return(

      <div className="card-container" key={idx} name="selected" value={card.selected} onClick={(e) => this.handleClick(e, card)}>
        <div className={this.cardClassName(card)}>
          <div className="face front" style={{backgroundImage:`url(${card.image})`}}>
            <div className="name">{card.name}</div>
          </div>
          <div className="face back"></div>
        </div>
      </div>
      )
  }

  render() {
    if (!this.props.gameStarted()) {
      return null
    }
    return(
      <div className="top">
        <div className="game-over hidden" value={this.props.gameOver()}>
            <div>{this.props.gameOver() ? "GAME OVER! " : ""}</div>
        </div>
        {this.props.cards.map(this.renderCards)}
        <br/>
      </div>
      )
  }
}

export default CardsContainer;
        // <li className="cards-space" key={idx} name="selected" value={card.selected} onClick={(e)=> this.handleClick(e, card)} style={style}>
        //           <span
        //             name="selected"
        //             value={card.selected}>{card.selected || card.matched ? card.name : "Click me"}
        //           </span>
        //         </li>
