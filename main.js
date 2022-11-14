/* Dependencies */
import { render } from 'lit-html'

/* Pages */
import homePage from './src/pages/index'

/* Utils */
import { LANG, EVENTS, TRACKS_TYPES } from './src/utils/constants'

const language = window && window.location.pathname === LANG.esPath ? LANG.es : LANG.en
document.documentElement.setAttribute('lang', language)

const isDevelopment = import.meta.env.VERCEL_ENV === 'development' || import.meta.env.MODE === 'development'
const APP_URL = isDevelopment ? import.meta.env.VITE_APP_URL : `https://${import.meta.env.VITE_VERCEL_URL}`

/* Tracking view */
fetch(`${APP_URL}/api/metrics?event=${EVENTS.homepage.view}&type=${TRACKS_TYPES.view}`).catch((error) => {
  error.step = EVENTS.homepage.view
  console.error('Error tracking', { error })
})

/*---- Render ----*/
render(homePage(), document.getElementById('app'))
