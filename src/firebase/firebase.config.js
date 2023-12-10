import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: set the config  env variable
const firebaseConfig = {
  apiKey: "AIzaSyAoGROgiSlF9A99fJyKap5y4lLd5W19-30",
  authDomain: "router-auth-context-127d3.firebaseapp.com",
  projectId: "router-auth-context-127d3",
  storageBucket: "router-auth-context-127d3.appspot.com",
  messagingSenderId: "642494715447",
  appId: "1:642494715447:web:71752757657907143751b2",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
