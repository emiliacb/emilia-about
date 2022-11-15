/* Dependencies */
import { html, render } from 'lit-html';

/* Utils */
import { changeLangObserver } from '../utils/contents';

class GithubButton extends HTMLElement {
  get template() {
    return html`
      <a
        href="https://github.com/Em3c2/emilia-about"
        target="_blank"
        rel="noopener noreferrer"
        class=${`fixed w-12 h-12 flex lg:w-10 lg:h-10 pl-4 pt-4 lg:p-2 right-0 bottom-0 lg:right-10 
        lg:bottom-10 backdrop-blur lg:text-black lg:bg-stone-300 lg:hover:animate-spin rounded-tl-full 
        lg:rounded-full overflow-hidden`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <span class="sr-only">Github</span>
      </a>
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('github-button-wc', GithubButton);
