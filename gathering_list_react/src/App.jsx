import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [search, setSearch] = useState("")

  function updateData(e){
    setSearch(e.target.value)
  }

  function searchAPI(){
    fetch('https://api.scryfall.com/cards/search?order=name&q=' + search)
      .then(function(response){
        displayResults(response)
      })
  }

  return (
    <>
      <button>Add Card</button>
      <dialog>
        <form onSubmit={searchAPI}>
          <input type="text" onChange={updateData} value={search}/>
          <input type="submit" />
        </form>
      </dialog>
    </>
  )
}

export default App
