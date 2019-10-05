import { LitElement, html } from 'lit-element';

class Tooltip extends LitElement {
  render() {
    return html`
      <div>Hello world!</div>
    `;
  }
}

customElements.define('ag-tooltip', Tooltip);