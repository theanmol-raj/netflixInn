import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZ7fag1ygHb6bUvH3WEquamlYw0gJddU",
  authDomain: "netflixbuildmain.firebaseapp.com",
  projectId: "netflixbuildmain",
  storageBucket: "netflixbuildmain.appspot.com",
  messagingSenderId: "969465324587",
  appId: "1:969465324587:web:78ad71d3b2a68a889d766e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig) 
export default app ;