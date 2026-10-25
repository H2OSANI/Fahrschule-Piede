export const ALLOWED_KLASSEN = [
  'AM', 'A1', 'A2', 'A', 'Mofa', 'B', 'BE', 'B96', 'C1', 'C1E', 'C', 'CE', 'L', 'T',
]

export const ALLOWED_SEX = ['', 'Herr', 'Frau']

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

/** @type {Map<string, number[]>} */
const rateLimitBuckets = new Map()

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim()
  }
  return req.socket?.remoteAddress || 'unknown'
}

export function isRateLimited(ip) {
  const now = Date.now()
  const recent = (rateLimitBuckets.get(ip) || []).filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  )
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitBuckets.set(ip, recent)
    return true
  }
  recent.push(now)
  rateLimitBuckets.set(ip, recent)
  return false
}

function asString(value, maxLen = 200) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLen)
}

function asStringArray(value) {
  if (!Array.isArray(value)) return []
  return value
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .filter((item) => ALLOWED_KLASSEN.includes(item))
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PLZ_RE = /^\d{5}$/

/**
 * @returns {{ ok: true, data: object } | { ok: false, error: string }}
 */
export function validateAnmeldungPayload(body) {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Ungültige Anfrage.' }
  }

  const Sex = asString(body.Sex, 10)
  if (!ALLOWED_SEX.includes(Sex)) {
    return { ok: false, error: 'Ungültige Anrede.' }
  }

  const Vorname = asString(body.Vorname, 100)
  const Name = asString(body.Name, 100)
  const Geburtsdatum = asString(body.Geburtsdatum, 32)
  const Geburtsort = asString(body.Geburtsort, 100)
  const Adresse = asString(body.Adresse, 200)
  const PLZ = asString(body.PLZ, 10)
  const Ort = asString(body.Ort, 100)
  const email = asString(body.email, 200)
  const mobil = asString(body.mobil, 40)
  const bodyText = asString(body.body, 500)
  const Klasse = asStringArray(body.Klasse)
  const Vorbesitz = asStringArray(body.Vorbesitz)

  if (!Vorname || !Name || !Geburtsdatum || !Geburtsort || !Adresse || !PLZ || !Ort || !email || !mobil) {
    return { ok: false, error: 'Bitte alle Pflichtfelder ausfüllen.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: 'Ungültige E-Mail-Adresse.' }
  }
  if (!PLZ_RE.test(PLZ)) {
    return { ok: false, error: 'Ungültige PLZ.' }
  }

  return {
    ok: true,
    data: {
      isSchueler: false,
      Sex,
      Vorname,
      Name,
      Geburtsdatum,
      Geburtsort,
      Adresse,
      PLZ,
      Ort,
      email,
      mobil,
      body: bodyText,
      Klasse,
      Vorbesitz,
    },
  }
}

export function buildMailHtml(data) {
  const e = escapeHtml
  return `<h1>Anmeldung von : ${e(data.Sex)} ${e(data.Vorname)} ${e(data.Name)}</h1> <br />
                ${e(data.body)}<br />
                Geburtsdatum: <i>${e(data.Geburtsdatum)}</i><br />
                Geburtsort: <i>${e(data.Geburtsort)}</i><br />
                Adresse: <i>${e(data.Adresse)}</i><br />
                PLZ: <i>${e(data.PLZ)}</i><br />
                Ort: <i>${e(data.Ort)}</i><br />
                Email: <i>${e(data.email)}</i><br />
                Mobil: <i>${e(data.mobil)}</i><br />
                Anmeldung für: <i>${e(data.Klasse.join(', '))}</i><br />
                Vorbesitz: <i>${e(data.Vorbesitz.join(', '))}</i><br />
                <br />
                Verwaltung unter <a href="https://admin.fahrschule-piede.de">admin.fahrschule-piede.de</a>`
}

export async function verifyTurnstileToken(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) {
    return { ok: false, error: 'Bot-Schutz ist nicht konfiguriert.' }
  }
  if (!token || typeof token !== 'string') {
    return { ok: false, error: 'Bot-Prüfung fehlgeschlagen. Bitte neu laden.' }
  }

  const form = new URLSearchParams()
  form.append('secret', secret)
  form.append('response', token)
  if (ip && ip !== 'unknown') {
    form.append('remoteip', ip)
  }

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: form,
    }
  )
  const result = await response.json()
  if (!result.success) {
    return { ok: false, error: 'Bot-Prüfung fehlgeschlagen. Bitte neu laden.' }
  }
  return { ok: true }
}
