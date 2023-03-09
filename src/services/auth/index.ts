import { auth } from 'services/firebase';
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence,
  signInWithPopup,
} from 'firebase/auth';
import { SignInProps } from './types';

async function signInWithGoogle(): Promise<SignInProps> {
  try {
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserLocalPersistence);
    const {
      user: { displayName, photoURL, uid },
    } = await signInWithPopup(auth, provider);

    if (!displayName || !photoURL) {
      throw new Error('Missing information from Google Account.');
    }
    return { user: { uid, displayName, photoURL }, error: null };
  } catch (e) {
    return { user: null, error: e };
  }
}

const signOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    throw new Error('Error on logout');
  }
};
export { signInWithGoogle, signOut };
