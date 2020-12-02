import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADshYRxKuCJqra8D7e1hwSyv6O3eEV8pU",
  authDomain: "goldencircle-ecommerce.firebaseapp.com",
  databaseURL: "https://goldencircle-ecommerce.firebaseio.com",
  projectId: "goldencircle-ecommerce",
  storageBucket: "goldencircle-ecommerce.appspot.com",
  messagingSenderId: "358695741807",
  appId: "1:358695741807:web:fa3d9fdcc6d7a6cbbaa09a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
