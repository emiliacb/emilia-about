/* Dependencies */
import { Logtail } from '@logtail/node'

const logtail = new Logtail(process.env.LOGTAIL_TOKEN)

/**
 * @name /api/metrics
 * @function
 * @param {Object} req Request.
 * @param {Object} res Response.
 * @param {String} [req.query.level] The level of the log.
 * @param {String} req.query.event The event message itself.
 * @param {String} req.query.type The type of event.
 */
export default async function handler(req, res) {
  const { query: { level = 'info', event, type } = {}, headers } = req
  const isMobile = headers['user-agent'].includes('Mobile') || headers['user-agent'].includes('Opera M')
  
  const tracksData = {
    origin: headers['origin'],
    real_ip: headers['x-real-ip'],
    userAgent: headers['user-agent'],
    is_mobile: isMobile,
    date: new Date(),
    event,
    type,
  }

  try {
    const data = await logtail[level](tracksData)
    res.status(200).send({ data })
  } catch (error) {
    res.status(500).send({ error })
  }
}
