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
  
  function doBtn(card, action){
    if (action == "Add Card"){
      setWishlist([...wishlist, card])
    }else if(action == "Delete"){
      console.log(card.oracle_id)
      setWishlist(wishlist.filter((e) => e.multiverse_ids != card.multiverse_ids))
    }
  }

  return (
    <>
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
