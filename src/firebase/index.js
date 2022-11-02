import app from "./app";
import { getProducts } from "./firestore";
import {
  googleAuth,
  validateEmail,
  signUp,
  signIn,
  logout,
  forgetPassword,
  updateUser,
  updateMail,
  updatePassword,
} from "./auth";

export {
  app,
  getProducts,
  googleAuth,
  validateEmail,
  signUp,
  signIn,
  logout,
  forgetPassword,
  updateUser,
  updateMail,
  updatePassword,
};
