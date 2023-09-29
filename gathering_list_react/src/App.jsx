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

  return (
    <>
      <button onClick={showDialog}>Add Card</button>
      <dialog ref={dialogRef}>
        <SearchDialog />
        <button onClick={closeDialog}>X</button>
      </dialog>
      <CardDisplay cards={wishlist}/>
    </>
  )
}

export default App
