# Fahrschule Piede Website

Next.js site for Fahrschule Piede (Firebase Hosting).

## Anmeldung form protection

The `/kontakt` signup form posts to `/api/anmeldung`, which:

1. Rejects honeypot submissions
2. Rate-limits by IP
3. Verifies [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)
4. Validates and HTML-escapes fields
5. Writes to Firestore (`anmeldung` + `mail`) via the Admin SDK

Client writes to `anmeldung` / `mail` are denied in `firestore.rules`. Deploy rules after merge:

```bash
firebase deploy --only firestore:rules
```

### Environment variables

Copy `.env.example` and set:

| Variable | Where |
|---|---|
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Client (Turnstile widget) |
| `TURNSTILE_SECRET_KEY` | Server (siteverify) |
| `FIREBASE_SERVICE_ACCOUNT` | Optional JSON for local API testing |
| `FIREBASE_PROJECT_ID` | Optional; defaults to `fahrschule-piede` |

Create a Turnstile widget in the [Cloudflare dashboard](https://dash.cloudflare.com/?to=/:account/turnstile) for your production domain and `localhost`.

## Scripts

```bash
npm install
npm run dev
npm run build
```
