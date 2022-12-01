import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"

          />
        </label>
        <label htmlFor="attr2">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
          />
        </label>
        <label htmlFor="imgLink">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="imgLink"
            id="imgLink"
          />
        </label>
        <label htmlFor="select">
          Select
          <select
            data-testid="rare-input"
            name="select"
            id="select"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="checkBox">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            name="checkBox"
            type="checkbox"
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
        >
          Salvar
        </button>
      </form>);
  }
}

export default Form;
