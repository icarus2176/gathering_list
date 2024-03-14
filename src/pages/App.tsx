import { useState, useEffect } from 'react';
import React from 'react';
import { SearchDialog } from '../components/SearchDialog';
import { CardDisplay } from '../components/CardDisplay';
import gatheringlogo from "../assets/gatheringlogo.png";
import { auth, database } from "../firebase-setup/firebase"
import { useNavigate } from "react-router-dom";
import { ref, set, child, get, onValue } from "firebase/database";
import './App.css';

function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, `users/${auth.currentUser.uid}`)).then((snapshot) => {
      if (snapshot.exists() ) {
        let startingList = snapshot.val()
        startingList = startingList.wishlist;
        setWishlist(startingList);
      }
    });
  }, []);

  const navigate = useNavigate();
  const dialogRef = React.useRef(null);

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
    set(ref(database, 'users/' + auth.currentUser.uid), {
      wishlist: wishlist
  });
  }

  async function logout(){
    auth.signOut().then(function() {
      navigate("/");
    });
  }

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="gradient" onClick={closeDialog}>
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
        </div>
        <div className="footer">
          <div className="contact">A fan project, not associated with Wizards of the Coast in any way.</div>
          <div className='contact'>Thanks to Scryfall for their public API!</div>
          <div className="contact">If there are errors or you wish to hire me, message me at ashe.kemuri@gmail.com</div>
        </div>
    </>
  )
}

export default App
