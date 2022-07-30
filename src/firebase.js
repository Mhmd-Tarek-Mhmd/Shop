import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the products collection
const productsCollection = collection(db, "products");

// Get all products data
async function getProducts() {
	const products = [];
	const productsSnapshot = await getDocs(productsCollection);

	productsSnapshot.forEach((doc) => products.push(doc.data()));
  return products;
}

export { getProducts };