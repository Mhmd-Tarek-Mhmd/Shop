import { initializeApp } from "firebase/app";

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));

export default app;
