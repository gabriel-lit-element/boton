import {LitElement, html,css} from 'lit-element';
import { buttonStyle } from './css/button-style';
import { generalStyles } from './css/general-styles';
/**
 * `button-lit` component button
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ButtonLit extends LitElement {
  static get properties() {
    return {
      disabled: {type: Boolean}
    }
  }
  static get styles(){
    return[
      buttonStyle,
      generalStyles
    ]
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.disabled = false;
  }



  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <button-primary ?disabled="${this.disabled}" @click="${this.clickButton}" class="button-primary">Primary</button-primary>
      <button-default ?disabled="${this.disabled}" @click="${this.clickButton}" class="button-default">Default</button-default>
      <button-blue ?disabled="${this.disabled}" @click="${this.clickButton}" class="button-blue">blue</button-blue>
      <button-warning ?disabled="${this.disabled}" @click="${this.clickButton}" class="button-warning">warning</button-warning>
      <button-disabled class="button-disabled">disabled</button-disabled>
    `;
  }

  clickButton(){
    console.log("Diste click en el boton")
  }
}

customElements.define('button-lit', ButtonLit);