import * as admin from 'firebase-admin';

const firebaseAcount: admin.ServiceAccount = {
  projectId: process.env.FB_PROJECT_ID,
  clientEmail: process.env.FB_CLIENT_EMAIL,
  privateKey: process.env.FB_PRIVATE_KEY?.replace(/\\n/g, '\n'),
};
const services = {
  credential: admin.credential.cert(firebaseAcount),
  databaseURL: process.env.FB_DATABASE_URL,
};

class FirebaseAdmin {
  private static instance: FirebaseAdmin;

  public admin!: typeof admin;

  constructor() {
    if (FirebaseAdmin.instance) {
      return FirebaseAdmin.instance;
    }
    this.admin = admin;
    if (!this.admin.apps.length) {
      this.admin.initializeApp(services);
    }
    FirebaseAdmin.instance = this;
  }
}

const firebaseAdmin = new FirebaseAdmin();

export default firebaseAdmin;
