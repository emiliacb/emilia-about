/* Dependencies */
import { html, render } from 'lit-html';
import { times } from 'lodash';

/* Utils */
import { SECTIONS } from '../utils/constants';
import { getContent, changeLangObserver } from '../utils/contents';

class Nav extends HTMLElement {
  constructor() {
    super();
    this.userPreferMotionReduce = document.documentElement.classList.contains('motion-reduced');
    this.isCopyIconVisible = false;
    this.isCopySuccesfull = false;

    this.toggleReduceMotion = this.toggleReduceMotion.bind(this);
    this.showCopy = this.showCopy.bind(this);
    this.hideCopy = this.hideCopy.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  openEmail() {
    window.location.assign('mailto:emiliacabralb@gmail.com');
  }

  showCopy() {
    this.isCopyIconVisible = true;
    render(this.template, this);
  }

  hideCopy() {
    this.isCopyIconVisible = false;
    this.isCopySuccesfull = false;
    render(this.template, this);
  }

  handleCopy() {
    navigator.clipboard
      .writeText('emiliacabralb@gmail.com')
      .then(() => {
        this.isCopySuccesfull = true;
        render(this.template, this);
      })
      .catch(() => {});
  }

  get template() {
    return html`
      <style>
        .button-copy:focus-visible .button-copy-icon__text,
        .button-copy:hover .button-copy-icon__text {
          display: block;
        }
      </style>

      <nav class="md:fixed w-52 print:hidden p-3 -mx-3" aria-label="Menu" tabindex="0">
        <ul class="flex flex-col gap-3">
          ${SECTIONS.map(
            (section) =>
              html`
                <li>
                  <a role="button" class="link" aria-label=${`${getContent('nav.goTo')} ${section}`} href=${`#${section}`}>
                    ${getContent(`${section}.title`)}
                  </a>
                </li>
              `,
          )}
          <!-- TODO mover a un componente nuevo -->
          <li class="flex items-center h-6" @mouseover=${this.showCopy} @mouseleave=${this.hideCopy}>
            <a class="link opacity-100 font-normal" role="button" @click=${this.openEmail} href=""> ${getContent('nav.contact')} </a>
            <button class="button-copy relative h-8 items-center px-2 w-8 hidden lg:flex" @click=${this.handleCopy} @focus=${this.showCopy} @blur=${this.hideCopy}>
              ${!this.isCopySuccesfull
                ? html`
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-4 h-4 ${!this.isCopyIconVisible ? 'hidden' : ''}"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                      />
                    </svg>
                  `
                : html`
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-4 h-4 text-green-700 dark:text-green-300 ${!this.isCopyIconVisible ? 'hidden' : ''}"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  `}
              <span class="absolute text-left left-8 w-20 font-light hidden text-xs button-copy-icon__text">
                ${this.isCopyIconVisible && this.isCopySuccesfull ? getContent('nav.copied') : ''}
                ${this.isCopyIconVisible && !this.isCopySuccesfull ? getContent('nav.copyEmail') : ''}
              </span>
            </button>
          </li>
          <li>
            <button class="visible-on-focus link focus:link" @click=${this.toggleReduceMotion}>
              ${this.userPreferMotionReduce ? getContent('nav.motionReduced') : getContent('nav.motionFull')}
            </button>
            <span class="sr-only" aria-live="off" id="aria-live-feedback">
              ${this.userPreferMotionReduce ? getContent('nav.motionReducedFeedback') : getContent('nav.motionFullFeedback')}
            </span>
          </li>
        </ul>
      </nav>
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

customElements.define('nav-wc', Nav);
