/* Dependencies */
import { render, html } from 'lit-html';

/* Pages */
import './pages/index';

/* Utils */
import { LANG, EVENTS, TRACKS_TYPES } from './utils/constants';

const language = window && window.location.pathname === LANG.esPath ? LANG.es : LANG.en;
document.documentElement.setAttribute('lang', language);

/* Tracking view */
const isDevelopment = import.meta.env.VERCEL_ENV === 'development' || import.meta.env.MODE === 'development';
const APP_URL = isDevelopment ? import.meta.env.VITE_APP_URL : `https://${import.meta.env.VITE_VERCEL_URL}`;
fetch(`${APP_URL}/api/metrics?event=${EVENTS.homepage.view}&type=${TRACKS_TYPES.view}`).catch((error) => {
  error.step = EVENTS.homepage.view;
  console.error('Error tracking', { error });
});

/*---- Render ----*/
render(html`<homepage-wc></homepage-wc>`, document.getElementById('app'));
