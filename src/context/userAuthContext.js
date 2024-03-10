import React, { createContext, useContext } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  function setRecatcha(number){
    const recaptchaverifier = new RecaptchaVerifier(
       auth,
       'recaptcha-container',
       {}
    )
    recaptchaverifier.render();
    return signInWithPhoneNumber(auth,number,recaptchaverifier);

 }


 return (
    <userAuthContext.Provider value={{setRecatcha}}>{children}</userAuthContext.Provider>
 )
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
