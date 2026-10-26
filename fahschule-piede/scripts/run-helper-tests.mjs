/**
 * Sanity checks for signup validation helpers (no Firebase).
 * Bundles lib/anmeldungHelpers.js then runs asserts.
 */
import { unlinkSync } from 'fs'
import { pathToFileURL } from 'url'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { spawnSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outfile = join(root, '.helper-tests.bundle.mjs')

const build = spawnSync(
  'npx',
  ['--yes', 'esbuild', 'lib/anmeldungHelpers.js', '--bundle', '--platform=node', '--format=esm', `--outfile=${outfile}`],
  { cwd: root, stdio: 'inherit', shell: true }
)
if (build.status !== 0) process.exit(build.status || 1)

const {
  escapeHtml,
  validateAnmeldungPayload,
  buildMailHtml,
  isRateLimited,
  spamScore,
} = await import(pathToFileURL(outfile).href)

function assert(cond, msg) {
  if (!cond) throw new Error(msg)
}

try {
  const valid = validateAnmeldungPayload({
    Sex: 'Herr',
    Vorname: 'Max',
    Name: 'Mustermann',
    Geburtsdatum: '2000-01-01',
    Geburtsort: 'Regen',
    Adresse: 'Teststr. 1',
    PLZ: '94209',
    Ort: 'Regen',
    email: 'max@example.com',
    mobil: '0123456789',
    body: '<script>alert(1)</script>',
    Klasse: ['B', 'evil'],
    Vorbesitz: ['AM'],
  })
  assert(valid.ok, 'valid payload should pass')
  assert(valid.data.Klasse.length === 1 && valid.data.Klasse[0] === 'B', 'klasse allowlist')

  const html = buildMailHtml(valid.data)
  assert(!html.includes('<script>'), 'html must escape script tags')
  assert(html.includes('&lt;script&gt;'), 'escaped script present')
  assert(escapeHtml('<b>') === '&lt;b&gt;', 'escapeHtml basic')
  assert(!validateAnmeldungPayload({ Vorname: 'x' }).ok, 'incomplete payload should fail')

  const ip = 'test-ip-' + Date.now()
  for (let i = 0; i < 5; i++) {
    assert(!isRateLimited(ip), `request ${i + 1} should be allowed`)
  }
  assert(isRateLimited(ip), '6th request should be rate limited')

  const pastedSpam = {
    Sex: 'Herr',
    Vorname: 'Hhmjqt',
    Name: 'FwTOGEkzaSITcMRFhjJL',
    Geburtsdatum: '1970-05-31',
    Geburtsort: 'wzHjeaZhjaASPqEKSXAYtSK',
    Adresse: 'wouRcXBlVhqifPhoJsMG',
    PLZ: '34348',
    Ort: 'cLLdrgrCSewGVMIvhfZ',
    email: 'ca.kanif.999@gmail.com',
    mobil: '6344132830',
    body: 'qCQXbXZbAvhrfWetRFC',
    Klasse: ['B'],
    Vorbesitz: [],
  }
  const spam = validateAnmeldungPayload(pastedSpam)
  assert(!spam.ok && spam.error === 'Bitte prüfe deine Angaben.', 'pasted spam should be rejected')
  assert(spamScore(pastedSpam) >= 4, 'pasted spam score should reach the limit')

  const missingKlasse = validateAnmeldungPayload({
    ...pastedSpam,
    Name: 'Mustermann',
    Geburtsdatum: '2000-01-01',
    Geburtsort: 'Regen',
    Adresse: 'Bahnhofstraße 1',
    PLZ: '94209',
    Ort: 'Regen',
    email: 'max@example.com',
    mobil: '015120100912',
    body: '',
    Klasse: [],
  })
  assert(
    !missingKlasse.ok && missingKlasse.error === 'Bitte mindestens eine Führerscheinklasse auswählen.',
    'signup without a licence class should be rejected'
  )

  const legitimate = [
    {
      Sex: 'Frau',
      Vorname: 'Harmanpreet',
      Name: 'Kaur',
      Geburtsdatum: '2006-09-26',
      Geburtsort: 'Indien',
      Adresse: 'Felsenweg 3',
      PLZ: '94209',
      Ort: 'Regen',
      email: 'harmanpreet.kaur2609@icloud.com',
      mobil: '0155 60075692',
      body: '',
      Klasse: ['B'],
      Vorbesitz: [],
    },
    {
      Sex: 'Frau',
      Vorname: 'Катерина',
      Name: 'Баранченко',
      Geburtsdatum: '1984-01-23',
      Geburtsort: 'Україна',
      Adresse: 'Bodenmaiser Straße 4',
      PLZ: '94264',
      Ort: 'Langdorf',
      email: 'katy230184@gmail.com',
      mobil: '+4915115826866',
      body: '',
      Klasse: ['B'],
      Vorbesitz: [],
    },
    {
      Sex: 'Herr',
      Vorname: 'Robert Leslie',
      Name: 'Kustos Ward',
      Geburtsdatum: '1963-10-20',
      Geburtsort: 'Tyler, Texas USA',
      Adresse: 'Dürlau 1',
      PLZ: '94269',
      Ort: 'Rinchnach',
      email: 'r.kustosward@yahoo.com',
      mobil: '49015737565312',
      body: 'I need to replace my Florida license. Ich spreche nur ein bisschen Deutsch.',
      Klasse: ['B'],
      Vorbesitz: ['B'],
    },
    {
      Sex: 'Herr',
      Vorname: 'Max',
      Name: 'Mustermann',
      Geburtsdatum: '1970-05-31',
      Geburtsort: 'Regen',
      Adresse: 'Bahnhofstraße 1',
      PLZ: '85296',
      Ort: 'Rohrbach',
      email: 'max@example.com',
      mobil: '015120100912',
      body: '',
      Klasse: ['B'],
      Vorbesitz: [],
    },
  ]
  for (const payload of legitimate) {
    const result = validateAnmeldungPayload(payload)
    assert(result.ok, `legitimate signup should pass: ${payload.Vorname} ${payload.Name}`)
    assert(spamScore(payload) < 4, `legitimate score should stay under the limit: ${payload.Vorname}`)
  }

  console.log('OK: anmeldung helpers passed')
} finally {
  try {
    unlinkSync(outfile)
  } catch {
    // ignore
  }
}
