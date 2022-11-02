import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  updateEmail,
  updatePassword as updatePass,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

/*
  [1] Create/Auth methods
*/

export const googleAuth = () => signInWithPopup(auth, provider);

export const validateEmail = () => sendEmailVerification(auth.currentUser);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const forgetPassword = (email) => sendPasswordResetEmail(auth, email);

/*
  [2] Update methods
*/

export const updateUser = (obj) => updateProfile(auth.currentUser, obj);

export const updateMail = (email) => updateEmail(auth.currentUser, email);

export const updatePassword = (password) =>
  updatePass(auth.currentUser, password);
