import { LitElement, html, css } from 'lit-element';

class List extends LitElement {

  static get styles() {
    return [
      css`
        :host{
          padding: 10px;
        }

        ul{
          display: block;
          width: 100%;
          border: 1px solid #000;
          border-radius: 5px;
          padding: 10px;
        }
      `
    ];
  }

  render() {
    return html`
      <ul>
        <slot><slot>
      </ul>
    `;
  }
}

customElements.define('ag-list', List);