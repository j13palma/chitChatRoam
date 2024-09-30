import admin from "firebase-admin";
import { initFirestore } from "@auth/firebase-adapter";
import { firestoreConfig } from "@/config/server";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(firestoreConfig),
  });
}

const app = admin.apps[0];
const adminAuth = admin.auth(app!);

const adminDb = initFirestore({
  credential: admin.credential.cert(firestoreConfig),
});

export { adminAuth, adminDb };
