import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const googleAuth = () => signInWithPopup(auth, provider);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);
