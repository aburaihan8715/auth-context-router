import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  // create or register user using email and password
  const createUserUsingEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email and password
  const loginUsingEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login using google
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // login using github
  const signInUsingGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  // login using facebook
  const signInUsingFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  // sign out or logout
  const logOut = () => {
    return signOut(auth);
  };

  // set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const userInfo = {
    createUserUsingEmailAndPassword,
    loginUsingEmailAndPassword,
    logOut,
    user,
    setUser,
    error,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    signInUsingGoogle,
    signInUsingGithub,
    signInUsingFacebook,
  };
  return <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>;
};

export default AuthProvider;
