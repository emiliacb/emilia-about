import { render } from "lit-html";

import homePage from "./src/pages/index";
import { LANG } from "./src/utils/constants";

const init = () => {
  const language =
    window && window.location.pathname === LANG.esPath ? LANG.es : LANG.en;
  document.documentElement.setAttribute("lang", language);
  render(homePage(), document.getElementById("app"));
};

init();
