import { useState } from 'react'
import React from 'react'
import { SearchDialog } from './components/SearchDialog'
import './App.css'
import { CardDisplay } from './components/CardDisplay'

function App() {
  const [wishlist, setWishlist] = useState([])
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
      console.log(card.oracle_id)
      setWishlist(wishlist.filter((e) => e[0].multiverse_ids != card.multiverse_ids))
    }
  }

  console.log(wishlist[0])

  return (
    <>
    <h1>Gathering List</h1>
    <h2>A Magic the Gathering Card Wishlist</h2>
      <button onClick={showDialog}>Add Card</button>
      <dialog ref={dialogRef}>
        <SearchDialog doBtn={doBtn}/>
        <button onClick={closeDialog}>X</button>
      </dialog>
      <CardDisplay cards={wishlist} doBtn={doBtn} btn={"Delete"}/>
    </>
  )
}

export default App
