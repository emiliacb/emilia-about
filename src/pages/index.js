/* Dependencies */
import { html } from "lit-html";

/* Lit components */
import "../components/section";
import "../components/header";
import "../components/nav";

/* Utils */
import { SECTIONS } from "../utils/constants";

// TODO transform in component
const homePage = () => html`
  <header-wc></header-wc>
  <main class="container flex-col md:flex-row" id="main">
    <nav-wc></nav-wc>
    <div class="md:ml-56 mt-12 print:-mt-16">
      ${SECTIONS.map((name) => html`<section-wc name=${name}></section-wc>`)}
    </div>
  </main>
  <div aria-hidden="true" class="theme-transition"></div>
`;

export default homePage;
