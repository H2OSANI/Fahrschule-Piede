import { getAdminDb } from '../../lib/firebaseAdmin'
import {
  buildMailHtml,
  getClientIp,
  isRateLimited,
  validateAnmeldungPayload,
  verifyTurnstileToken,
} from '../../lib/anmeldungHelpers'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = getClientIp(req)

  // Honeypot: bots that fill hidden fields get a fake success.
  if (typeof req.body?.website === 'string' && req.body.website.trim() !== '') {
    return res.status(200).json({ ok: true })
  }

  if (isRateLimited(ip)) {
    return res.status(429).json({
      error: 'Zu viele Anfragen. Bitte später erneut versuchen.',
    })
  }

  try {
    const turnstile = await verifyTurnstileToken(req.body?.turnstileToken, ip)
    if (!turnstile.ok) {
      return res.status(400).json({ error: turnstile.error })
    }

    const validated = validateAnmeldungPayload(req.body)
    if (!validated.ok) {
      return res.status(400).json({ error: validated.error })
    }

    const { data } = validated
    const db = getAdminDb()
    const batch = db.batch()
    const anmeldungRef = db.collection('anmeldung').doc()
    const mailRef = db.collection('mail').doc()

    batch.set(anmeldungRef, data)
    batch.set(mailRef, {
      to: 'info@fahrschule-piede.de',
      message: {
        subject: 'Neue Fahrschulanmeldung',
        html: buildMailHtml(data),
        ReplyTo: data.email,
        bcc: 'sandro.podhorodeski@cloudshot.de',
      },
    })

    await batch.commit()
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('anmeldung submit failed', err)
    return res.status(500).json({
      error: 'Anmeldung konnte nicht gesendet werden. Bitte später erneut versuchen.',
    })
  }
}
