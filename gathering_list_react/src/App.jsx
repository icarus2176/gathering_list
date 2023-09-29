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

  async function searchAPI(APIURL, searchTerm){
    const response = fetch(APIURL + searchTerm)
      .then((response) => response.json())
      .then((cardData) => {
        return cardData.data;
      })

      return response;
  }

  return (
    <>
      <button onClick={showDialog}>Add Card</button>
      <dialog ref={dialogRef}>
        <SearchDialog searchAPI={searchAPI} />
        <button onClick={closeDialog}>X</button>
      </dialog>
    </>
  )
}

export default App
