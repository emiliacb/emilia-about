/* Dependencies */
import { html, render } from "lit-html";

/* Utils */
import { toggleDarkMode } from "../utils";
import {
  toggleLanguage,
  changeLangObserver,
  getContent,
} from "../utils/contents";

class Header extends HTMLElement {
  get template() {
    return html`
      <header class="container relative justify-between items-center">
        <h1 tabindex="0" class="text-xl font-serif p-3 -ml-3 print:hidden">
          Emilia <span aria-hidden="true">/</span><span lang="en">About</span>
        </h1>
        <h1
          tabindex="0"
          class="hidden text-xl font-serif p-3 -ml-3 print:block print:text-3xl"
        >
          Emilia Cabral - Fullstack Developer
        </h1>
        <div class="flex">
          <button
            @click=${toggleLanguage}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full"
            aria-label=${getContent("header.languageLabel")}
            type="button"
          >
            <span class="text-xs font-serif" aria-hidden="true">
              ${getContent("header.languageIcon")}
            </span>
            <span class="sr-only" aria-live="polite"
              >${getContent("header.languageFeedback")}</span
            >
          </button>
          <button
            @click=${toggleDarkMode}
            class="print:hidden grid place-content-center w-12 h-12 align-middle focus:rounded-full"
            aria-label="Toggle dark mode"
            type="button"
          >
            <span aria-hidden="true">☾</span>
          </button>
        </div>
      </header>
      <span class="container -mt-12 hidden print:block italic"
        >emiliacabralb@gmail.com</span
      >
    `;
  }

  connectedCallback() {
    changeLangObserver(() => render(this.template, this));
    render(this.template, this);
  }
}

customElements.define("header-wc", Header);
