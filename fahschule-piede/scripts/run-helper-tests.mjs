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

  console.log('OK: anmeldung helpers passed')
} finally {
  try {
    unlinkSync(outfile)
  } catch {
    // ignore
  }
}
