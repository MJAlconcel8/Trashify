// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgBNR4RohdUJrDO-dUHqzCv3LGAAtRPJs",
  authDomain: "nsbehacks-39ad4.firebaseapp.com",
  projectId: "nsbehacks-39ad4",
  storageBucket: "nsbehacks-39ad4.appspot.com",
  messagingSenderId: "828574414466",
  appId: "1:828574414466:web:e464e3b9ed68d71145e69b",
  measurementId: "G-EL6HGPTQ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);