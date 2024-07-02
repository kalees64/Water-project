import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFnqxVGNz4UesYltM1LOvq8rxepGv-QiA",
  authDomain: "thannican-27f14.firebaseapp.com",
  projectId: "thannican-27f14",
  storageBucket: "thannican-27f14.appspot.com",
  messagingSenderId: "81052646103",
  appId: "1:81052646103:web:bc9ed406e03dcc825ece92",
};

// Initialize Firebase
let auth;

//auth
const app = initializeApp(firebaseConfig);
auth = initializeAuth(app);

//FireStore

export const db = getFirestore(app);

export default auth;
