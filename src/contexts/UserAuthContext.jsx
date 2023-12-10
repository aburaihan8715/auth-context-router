/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const UserAuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  // update user profile
  const updateUserProfile = (name, user) => {
    return updateProfile(user, {
      displayName: name,
    });
  };

  // verify user email
  const verifyUserEmail = (user) => {
    return sendEmailVerification(user);
  };

  // sign out or logout
  const logOut = () => {
    return signOut(auth);
  };

  // set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{
        createUserUsingEmailAndPassword,
        loginUsingEmailAndPassword,
        logOut,
        user,
        setUser,
        signInUsingGoogle,
        signInUsingGithub,
        signInUsingFacebook,
        updateUserProfile,
        verifyUserEmail,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

// hooks for getting users authenticated
export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
