/* eslint-disable */
//aware of redux
//Dispatch Actions
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gameOver, selectedCards } from '../selectors'
import { selectCard, checkSelectedCards } from '../action-creators'

// import Card from './Card';


class CardsContainer extends React.Component {

//this handleClick event is in render cards
  handleClick(e, card, cardID) {
    e.preventDefault();
    // console.log(card.image);
    if(card.matched) {
      alert("already matched");
      return;
    }
    this.props.onCardSelected(cardID); // now an action that is dispatched but I need to pass in the card Id for this card, not the whole card!
    // this.props.checkSelectedCards(); // now an action that is dispatched, tricky one here, I need all the cards but am not accessing them
  }
// cardClassName is fine here
  cardClassName(card) {
    let array = ["card"];
    if (card.selected) {
      array.push("selected")
    } else if (card.matched) {
      array.push("matched")
    }
    return array.join(" ");
  }
// mainCardsContainerClassName is fine here
  mainCardsContainerClassName() {
    let styleArr = ["top"]
    switch (this.props.cards.length){
      case 12:
        styleArr.push("easy")
        break;
      case 18:
        styleArr.push("medium")
        break;
      default:
        styleArr.push("hard")
        }
      return styleArr.join(" ")
  }

  renderCards(card, cardID) {

    return(

      <div className="card-container" key={cardID} name="selected" value={card.selected} onClick={(e) => this.handleClick(e, card, cardID)}>
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
    return(
      <div className={this.mainCardsContainerClassName()}>
        <div className="game-over hidden" value={this.props.gameOver}>
            <div>{this.props.gameOver ? "GAME OVER! " : ""}</div>
        </div>
        {this.props.cards.map(this.renderCards.bind(this))}
        <br/>
      </div>
      )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    gameOver: gameOver(state)
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardSelected: (cardID) => {
      dispatch(selectCard(cardID))
      dispatch(checkSelectedCards())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsContainer)
