import { get } from 'lodash';
import { LANG } from './constants';
import contents from '../content';

const toggleLanguage = () => {
  const newlanguage = window.location.pathname === LANG.esPath ? LANG.en : LANG.es;
  window.history.pushState({}, '', `/${newlanguage}`);
  document.documentElement.setAttribute('lang', newlanguage);
  window.dispatchEvent(new CustomEvent('rerender'));
};

const getLocale = () => document.documentElement.getAttribute('lang');

const getContent = (path) => {
  const locale = getLocale();
  const wording = get(contents[locale], path);
  const defaultWording = get(contents[LANG.en], path);
  if (!wording && !defaultWording) console.error(`Missing wording ${path}`);

  return wording || defaultWording || '-';
};

// TODO create only a observer and use an array of elements that subscribe to the changes
const changeLangObserver = (callback) => {
  const observer = new MutationObserver((mutations) => mutations.forEach(({ attributeName }) => attributeName && callback()));
  observer.observe(document.documentElement, { attributes: true });
  return observer;
};

export { toggleLanguage, getLocale, getContent, changeLangObserver };
