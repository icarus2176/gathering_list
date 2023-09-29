import { useState } from 'react'
import React from 'react'
import { SearchDialog } from './components/SearchDialog'
import './App.css'

function App() {
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
    </>
  )
}

export default App
