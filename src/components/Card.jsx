import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName } = this.props;
    const { cardDescription } = this.props;
    const { cardAttr1 } = this.props;
    const { cardAttr2 } = this.props;
    const { cardAttr3 } = this.props;
    const { cardImage } = this.props;
    const { cardRare } = this.props;
    const { cardTrunfo } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">
          {cardName}
        </h1>
        <img data-testid="image-card" src={ cardImage } alt={ `${cardName}` } />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <h2 data-testid="attr1-card">
          {cardAttr1}
        </h2>
        <h2 data-testid="attr2-card">
          {cardAttr2}
        </h2>
        <h2 data-testid="attr3-card">
          {cardAttr3}
        </h2>
        <h3 data-testid="rare-card">
          {cardRare}
        </h3>
        {
          cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
