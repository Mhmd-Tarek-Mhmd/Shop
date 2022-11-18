import app from "./app";
import { getProducts } from "./firestore";
import {
  googleAuth,
  validateEmail,
  signUp,
  signIn,
  logout,
  updateName,
  updateEmail,
  updateAvatar,
  deleteProfile,
  updatePassword,
  forgetPassword,
} from "./auth";

export {
  app,
  getProducts,
  googleAuth,
  validateEmail,
  signUp,
  signIn,
  logout,
  updateName,
  updateEmail,
  updateAvatar,
  deleteProfile,
  updatePassword,
  forgetPassword,
};
