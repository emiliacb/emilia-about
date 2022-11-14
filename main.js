/* Dependencies */
import { render } from 'lit-html'

/* Pages */
import homePage from './src/pages/index'

/* Utils */
import { LANG, EVENTS, TRACKS_TYPES } from './src/utils/constants'

const language = window && window.location.pathname === LANG.esPath ? LANG.es : LANG.en
document.documentElement.setAttribute('lang', language)

const API_URL = import.meta.env.VITE_API_URL || 'https://localhost:3000'

/* Tracking view */
fetch(`${API_URL}api/metrics?event=${EVENTS.homepage.view}&type=${TRACKS_TYPES.view}`).catch((error) => {
  error.step = EVENTS.homepage.view
  console.error('Error tracking', { error })
})

render(homePage(), document.getElementById('app'))
