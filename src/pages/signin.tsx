import gatheringlogo from "../assets/gatheringlogo.png";
import  { useState, useEffect } from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'firebase/compat/auth';
import {auth, uiConfig, onAuthStateChanged } from "../firebase-setup/firebase";
import "./signin.css"

export default function SignIn(){
  /* const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  });
*/
  return(
    <div className="loginAndSignUp">
      <img className="logoSmall" src={gatheringlogo} alt="Logo. Gathering List. A Magic the Gathering Card Wishlist"/>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  )
}