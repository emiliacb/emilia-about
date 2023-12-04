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
import { getContent } from '../utils/contents';

class HomePage extends HTMLElement {
  get template() {
    return html`
      <header-wc></header-wc>
      <main
        class="container flex-col md:flex-row"
        id="main"
      >
        <nav-wc></nav-wc>
        <div class="md:ml-6 mt-12 print:!ml-20 print:!-mt-10">
          ${SECTIONS.map((name) => html`<section-wc name=${name}></section-wc>`)}
        </div>
        <github-button-wc></github-button-wc>
      </main>
      <div
        aria-hidden="true"
        class="theme-transition"
      ></div>
      <mouse-follower-wc></mouse-follower-wc>
      <ab-chat 
        chatbotID="kYgs8Q3vcvXg1P4XnWEfh"
        theme="dark"
        orientation="right"
        color="#1C1917"
        class="hidden md:block fixed bottom-5 right-10"
        headline=${getContent('chatbot.headline')}
        description=${getContent('chatbot.description')}
        initialMessage=${getContent('chatbot.initialMessage')}
        placeholder=${getContent('chatbot.placeholder')}
      ></ab-chat>
    `;
  }

  connectedCallback() {
    render(this.template, this);
  }
}

customElements.define('homepage-wc', HomePage);
