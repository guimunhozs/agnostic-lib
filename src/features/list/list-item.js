import { LitElement, html, css } from 'lit-element';

class ListItem extends LitElement {

  static get styles() {
    return [
      css`
        li{
          list-style-type:none;
          margin: 10px 0;
        }
      `
    ];
  }

  render() {
    return html`
      <li>
        <slot><slot>
      </li>
    `;
  }
}

customElements.define('ag-list-item', ListItem);