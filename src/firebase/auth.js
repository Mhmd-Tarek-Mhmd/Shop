import {
  getAuth,
  signOut,
  deleteUser,
  updateProfile,
  signInWithPopup,
  EmailAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail as updateMail,
  signInWithEmailAndPassword,
  updatePassword as updatePass,
  reauthenticateWithCredential,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { uploadAvatar, getAvatarURL } from "./storage";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const getCredential = (password) =>
  EmailAuthProvider.credential(auth.currentUser.email, password);

/*
  [1] Auth/Create methods
*/

export const googleAuth = () => signInWithPopup(auth, provider);

export const validateEmail = () => sendEmailVerification(auth.currentUser);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const forgetPassword = (email) => sendPasswordResetEmail(auth, email);

export const reAuth = (password) =>
  reauthenticateWithCredential(auth.currentUser, getCredential(password));

export const googleReAuth = () => googleAuth();

/*
  [2] Update/Delete methods
*/

const updateUser = (obj) => updateProfile(auth.currentUser, obj);

export const updateAvatar = (file, cb) => {
  const uid = auth.currentUser.uid;

  return uploadAvatar(uid, file).then(() => {
    getAvatarURL(uid).then((photoURL) => {
      updateUser({ photoURL });
      cb(photoURL);
    });
  });
};

export const updateName = (displayName) => updateUser({ displayName });

export const updateEmail = (newEmail) => updateMail(auth.currentUser, newEmail);

export const updatePassword = (newPassword) =>
  updatePass(auth.currentUser, newPassword);

export const deleteProfile = () => deleteUser(auth.currentUser);
