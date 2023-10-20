import { useState } from 'react';
import React from 'react';
import { SearchDialog } from '../components/SearchDialog';
import { CardDisplay } from '../components/CardDisplay';
import gatheringlogo from "../assets/gatheringlogo.png";
import { auth } from "../firebase-setup/firebase"
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  let startingList = []
  const navigate = useNavigate();
  console.log(auth.currentUser)

  if (localStorage.wishlist){
    startingList = JSON.parse(localStorage.wishlist);
  }

  const [wishlist, setWishlist] = useState(startingList)
  const dialogRef = React.useRef(null)

  function showDialog(){
    dialogRef.current.showModal();
  }

  function closeDialog(){
    dialogRef.current.close();
  }
  
  function doBtn(card, action, foil){
    if (action == "Add Card"){
      setWishlist(wishlist => [...wishlist, [card, foil]])
    }else if(action == "Delete"){
      setWishlist(wishlist.filter((e) => e[0].multiverse_ids != card.multiverse_ids))
    }
  }

  function save(){
    localStorage.wishlist = JSON.stringify(wishlist);
  }

  async function logout(){
    console.log(auth.currentUser);
    auth.signOut().then(function() {
      console.log(auth.currentUser);
      navigate("/");
    });
  }

  return (
    <>
    <div className="header">
      <img className="logo" src={gatheringlogo} alt="Logo. Gathering List. A Magic the Gathering Card Wishlist"/>
      <button className="signout" onClick={logout}>Sign Out</button>
    </div>
    <div className="main">
      <button className="save" onClick={save}>Save</button>
      <button className="addCard" onClick={showDialog}>Add</button>
        <dialog ref={dialogRef}>
          <SearchDialog doBtn={doBtn} closeDialog={closeDialog}/>
        </dialog>
        <CardDisplay cards={wishlist} doBtn={doBtn} btn={"Delete"}/>
    </div>
      <div className="footer">
        <div className="contact">A fan project, not associated with Wizards of the Coast in any way.</div>
        <div className="contact">If there are errors or you wish to hire me, message me at ashe.kemuri@gmail.com</div>
      </div>
    </>
  )
}

export default App
