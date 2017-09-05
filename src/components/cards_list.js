import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CardsList extends Component {
  componentWillMount() {
    this.props.fetchCards();

  }

  renderCards(card) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{card.apr}</h4>
        <p className="card-text">{card.credit_available}</p>
        <a className="btn btn-primary">Add Credit Cards</a>
      </div>
    );
  }

  render() {
    return (
      <div className="cards-list">
        { this.props.cards.map(this.renderCards) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cards: state.cards };
}

export default connect(mapStateToProps, actions)(CardsList);
