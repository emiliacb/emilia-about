/* Dependencies */
import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

/* Utils */
import { getContent, changeLangObserver } from '../utils/contents';

class Section extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  get template() {
    return html`
      <section title=${getContent(`${this.name}.title`)} class="relative md:pt-16 md:px-6 md:pb-6 w-full text-justify" id="${this.name}" tabindex="0">
        <h2 class="h2 print:mt-10">${getContent(`${this.name}.title`)}</h2>
        <div class="custom-prose">${unsafeHTML(getContent(`${this.name}.text`))}</div>
      </section>
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('section-wc', Section);
