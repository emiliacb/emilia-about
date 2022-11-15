/* Dependencies */
import { render, html } from 'lit-html';

/* Lit components */
import '../components/section';
import '../components/header';
import '../components/nav';
import '../components/github-button';

/* Utils */
import { changeLangObserver } from '../utils/contents';
import { SECTIONS } from '../utils/constants';

class HomePage extends HTMLElement {
  get template() {
    return html`
      <header-wc></header-wc>
      <main
        class="container flex-col md:flex-row"
        id="main"
      >
        <nav-wc></nav-wc>
        <div class="md:ml-56 mt-12 print:-mt-16">
          ${SECTIONS.map((name) => html`<section-wc name=${name}></section-wc>`)}
        </div>
        <github-button-wc></github-button-wc>
      </main>
      <div
        aria-hidden="true"
        class="theme-transition"
      ></div>
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('homepage-wc', HomePage);
