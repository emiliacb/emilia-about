/* Dependencies */
import { html } from 'lit-html'

/* Lit components */
import '../components/section'
import '../components/header'
import '../components/nav'

/* Utils */
import { SECTIONS } from '../utils/constants'

// TODO transform in component
const homePage = () => html`
  <header-wc></header-wc>
  <main class="container flex-col md:flex-row" id="main">
    <nav-wc></nav-wc>
    <div class="md:ml-56 mt-12 print:-mt-16">${SECTIONS.map((name) => html`<section-wc name=${name}></section-wc>`)}</div>
    <a
      href="https://github.com/Em3c2/emilia-about"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed w-12 h-12 flex lg:w-10 lg:h-10 pl-4 pt-4 lg:p-2 right-0 bottom-0 lg:right-10 lg:bottom-10 backdrop-blur lg:text-black lg:bg-stone-300 lg:hover:animate-spin rounded-tl-full lg:rounded-full overflow-hidden"
    >
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
      <span class="sr-only">Github</span>
    </a>
  </main>
  <div aria-hidden="true" class="theme-transition"></div>
`

export default homePage
