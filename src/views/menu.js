import { LitElement, html } from 'lit-element';

class Menu extends LitElement {
  render() {
    return html`
      <div>Hello world!</div>
    `;
  }
}

customElements.define('ag-menu', Menu);