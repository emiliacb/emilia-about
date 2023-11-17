/* Dependencies */
import { html, render } from 'lit-html';

/* Utils */
import { SECTIONS } from '../utils/constants';
import { getContent, changeLangObserver } from '../utils/contents';

class Nav extends HTMLElement {
  constructor() {
    super();
    this.isCopyIconVisible = false;
    this.isCopySuccesfull = false;

    this.resetCopyButton = this.resetCopyButton.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  openEmail() {
    window.location.assign('mailto:emiliacabralb@gmail.com');
  }

  resetCopyButton() {
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
      <nav class="md:sticky md:top-14 w-52 print:hidden p-3 -mx-3" aria-label="Menu" tabindex="0">
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
          <li class="list-item-copy li flex items-center h-6" @mouseleave=${this.resetCopyButton}>
            <a class="link opacity-100 font-normal" role="button" @click=${this.openEmail} href=""> ${getContent('nav.contact')} </a>
            <button
              data-testid="button-copy"
              class="button-copy relative h-8 items-center px-2 w-8 flex focus-visible:opacity-100 transition-transform duration-100"
              @click=${this.handleCopy}
              @blur=${this.resetCopyButton}
              aria-labelledby="copy-btn-text"
            >
              ${!this.isCopySuccesfull
                ? html`
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      class="w-4 h-4"
                      data-testid="button-icon-success"
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
                      class="w-4 h-4 text-cyan-700 dark:text-emerald-200"
                      data-testid="button-icon-clipboard"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                      />
                    </svg>
                  `}
              <span id="copy-btn-text" class="button-copy-icon__text absolute text-left left-8 w-20 font-light text-xs block opacity-0 transition-all duration-100">
                ${!this.isCopySuccesfull ? getContent('nav.copyEmail') : getContent('nav.copied')}
              </span>
            </button>
          </li>
        </ul>
      </nav>
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define('nav-wc', Nav);
