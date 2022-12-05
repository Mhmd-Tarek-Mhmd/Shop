import {
  doc,
  getDocs,
  updateDoc,
  collection,
  getFirestore,
  enableIndexedDbPersistence,
} from "firebase/firestore";

import app from "./app";

const db = getFirestore(app);
enableIndexedDbPersistence(db);

const productsCollection = collection(db, "products");

// Get all products data
async function getProducts() {
  const products = [];
  const productsSnapshot = await getDocs(productsCollection);

  productsSnapshot.forEach((doc) => products.push(doc.data()));
  return products;
}

// Add a product review
export const addReview = (product) => {
  const productDoc = doc(db, "products", product.id);
  return updateDoc(productDoc, product);
};

export { getProducts };
