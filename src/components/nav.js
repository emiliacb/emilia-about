/* Dependencies */
import { html, render } from 'lit-html'

/* Utils */
import { SECTIONS } from '../utils/constants'
import { getContent, changeLangObserver } from '../utils/contents'

class Nav extends HTMLElement {
  constructor() {
    super()
    this.userPreferMotionReduce = document.documentElement.classList.contains('motion-reduced')
    this.toggleReduceMotion = this.toggleReduceMotion.bind(this)
  }

  get template() {
    return html`
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
    `
  }

  toggleReduceMotion() {
    document.getElementById('aria-live-feedback').ariaLive = 'polite'
    document.getElementById('aria-live-feedback').ariaHidden = false
    setTimeout(() => {
      document.getElementById('aria-live-feedback').ariaLive = 'off'
      document.getElementById('aria-live-feedback').ariaHidden = true
    }, 1000)

    this.userPreferMotionReduce = !this.userPreferMotionReduce
    localStorage.setItem('motionReduce', this.userPreferMotionReduce)
    document.documentElement.classList.toggle('motion-reduce', this.userPreferMotionReduce)
    render(this.template, this)
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this))
    render(this.template, this)
  }
}

customElements.define('nav-wc', Nav)
