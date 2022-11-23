/* Dependencies */
import { html, render } from 'lit-html';

/* Utils */
import { toggleDarkMode } from '../utils';
import { toggleLanguage, changeLangObserver, getContent } from '../utils/contents';

class Header extends HTMLElement {
  get template() {
    return html`
      <header class="container relative justify-between items-center">
        <h1 tabindex="0" class="text-xl font-serif p-3 -ml-3 print:hidden">Emilia <span aria-hidden="true">/</span><span lang="en">About</span></h1>
        <h1 tabindex="0" class="hidden text-xl font-serif p-3 -ml-3 print:block print:text-3xl">Emilia Cabral - Fullstack Developer</h1>
        <div class="flex">
          <button
            @click=${toggleLanguage}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full"
            aria-label=${getContent('header.languageLabel')}
            type="button"
          >
            <span class="text-xs font-serif" aria-hidden="true"> ${getContent('header.languageIcon')} </span>
            <span class="sr-only" aria-live="polite">${getContent('header.languageFeedback')}</span>
          </button>
          <button
            @click=${toggleDarkMode}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full"
            aria-label="Toggle dark mode"
            type="button"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 dark:hidden">
              <path
                fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                clip-rule="evenodd"
              />
            </svg>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 hidden dark:block">
              <path
                d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
              />
            </svg>
          </button>
        </div>
      </header>
      <span class="container -mt-12 hidden print:block italic">emiliaborg.ar</span>
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('header-wc', Header);
