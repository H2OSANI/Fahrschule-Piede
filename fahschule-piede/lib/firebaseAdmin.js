import { initializeApp, getApps, cert, applicationDefault } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

function getCredential() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT) {
    return cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
  }
  // On Firebase Hosting / Cloud Functions, Application Default Credentials work.
  return applicationDefault()
}

export function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: getCredential(),
      projectId: process.env.FIREBASE_PROJECT_ID || 'fahrschule-piede',
    })
  }
  return getFirestore()
}
