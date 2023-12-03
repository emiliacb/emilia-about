/* Dependencies */
import { html, render } from 'lit-html';

/* Utils */
import { toggleDarkMode } from '../utils';
import { toggleLanguage, changeLangObserver, getContent } from '../utils/contents';

class Header extends HTMLElement {
  constructor() {
    super();
    this.userPreferMotionReduce = document.documentElement.classList.contains('motion-reduced');
    this.toggleReduceMotion = this.toggleReduceMotion.bind(this);
  }

  get template() {
    return html`
      <header class="container relative justify-between items-center">
        <a
          class="visible-on-focus bg-black dark:bg-white text-white dark:text-black focus-visible:p-5 focus-visible:absolute"
          href="#experience"
        >
          ${getContent('header.skip')}
        </a>
        <button
          class="visible-on-focus bg-black dark:bg-white text-white dark:text-black focus-visible:p-5 focus-visible:absolute"
          @click=${this.toggleReduceMotion}
        >
          ${this.userPreferMotionReduce ? getContent('header.motionReduced') : getContent('header.motionFull')}
        </button>
        <span class="sr-only" aria-live="off" id="aria-live-feedback">
          ${this.userPreferMotionReduce ? getContent('header.motionReducedFeedback') : getContent('header.motionFullFeedback')}
        </span>
        <a href="/" class="p-3 -ml-3" aria-label=${getContent('header.linkHome')}>
          <h1 class="text-xl font-serif print:hidden">Emilia <span aria-hidden="true">/</span><span lang="en">About</span></h1>
          <h1 class="hidden text-xl font-serif print:block print:text-3xl">Emilia Cabral - Fullstack Developer</h1>
        </a>
        <div class="flex">
          <button
            @click=${toggleLanguage}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full transition-transform duration-300 hover:scale-125"
            aria-label=${getContent('header.languageLabel')}
            type="button"
          >
            <span class="text-xs font-serif" aria-hidden="true"> ${getContent('header.languageIcon')} </span>
            <span class="sr-only" aria-live="polite">${getContent('header.languageFeedback')}</span>
          </button>
          <button
            @click=${toggleDarkMode}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full transition-transform duration-300 hover:scale-125"
            aria-label=${getContent('header.darkModeLabel')}
            type="button"
            aria-live="polite"
          >
            <svg class="w-4 h-4 dark:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                clip-rule="evenodd"
              />
            </svg>
            <svg class="w-5 h-5 hidden dark:block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
              />
            </svg>
          </button>
          <button
            @click=${() => window && window.print()}
            class="hidden md:grid print:!hidden place-content-center w-12 h-12 align-middle focus:rounded-full transition-transform duration-300 hover:scale-125"
            aria-label=${getContent('header.printLabel')}
            type="button"
          >
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
      <span class="container -mt-12 hidden print:block italic">emiliaborg.ar</span>
    `;
  }

  toggleReduceMotion() {
    document.getElementById('aria-live-feedback').ariaLive = 'polite';
    document.getElementById('aria-live-feedback').ariaHidden = false;
    setTimeout(() => {
      document.getElementById('aria-live-feedback').ariaLive = 'off';
      document.getElementById('aria-live-feedback').ariaHidden = true;
    }, 1000);

    this.userPreferMotionReduce = !this.userPreferMotionReduce;
    localStorage.setItem('motionReduce', this.userPreferMotionReduce);
    document.documentElement.classList.toggle('motion-reduce', this.userPreferMotionReduce);
    render(this.template, this);
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('header-wc', Header);
