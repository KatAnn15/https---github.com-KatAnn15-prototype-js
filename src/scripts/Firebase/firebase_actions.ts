import { ref, getDownloadURL } from "firebase/storage";
import {
  storage,
  auth,
  GoogleProvider,
  FacebookProvider,
  db,
} from "./firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

//--------------RETRIEVING_DATA-------------//

export function getStorageItem(itemPath: string) {
  const reference = ref(storage, itemPath);
  return getDownloadURL(reference);
}
export function getFirestoreData(collection: string): Promise<any[]> {
  const ref = db.collection(collection);
  return new Promise((resolve) => {
    ref.onSnapshot((data) => {
      const parent: any[] = [];
      data.forEach((item) => {
        const itemdata = item.data();
        parent.push(itemdata);
      });
      resolve(parent);
    });
  });
}

//--------------AUTHENTICATION--------------/

export function registerEmailPassword(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => userCredentials.user
  );
}

export function signInEmailPassword(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredentials) => userCredentials.user
  );
}

export function googleSignIn() {
  return signInWithPopup(auth, GoogleProvider);
}

export function facebookSignIn() {
  return signInWithPopup(auth, FacebookProvider);
}
