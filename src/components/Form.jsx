import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
            minLength="1"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
            minLength="1"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"

          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
        </label>
        <label htmlFor="imgLink">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            id="imgLink"
            value={ cardImage }
            onChange={ onInputChange }
            minLength="1"
          />
        </label>
        <label htmlFor="cardRare">
          Select
          <select
            data-testid="rare-input"
            name="cardRare"
            id="select"
            value={ cardRare }
            onChange={ onInputChange }
            minLength="1"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trunfo
          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
            data-testid="trunfo-input"
            name="cardTrunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  isSaveButtonDisabled: true,
  onInputChange: null,
  onSaveButtonClick: null,
};

Form.propTypes = {
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
}.isRequired;

export default Form;
