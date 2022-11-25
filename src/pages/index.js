/* Dependencies */
import { render, html } from 'lit-html';

/* Lit components */
import '../components/section';
import '../components/header';
import '../components/nav';
import '../components/github-button';
import '../components/mouse-follower';

/* Utils */
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
      <mouse-follower-wc></mouse-follower-wc>
    `;
  }

  connectedCallback() {
    render(this.template, this);
  }
}

customElements.define('homepage-wc', HomePage);
