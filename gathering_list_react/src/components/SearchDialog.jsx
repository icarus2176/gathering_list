import {Card} from './Card'
import {useState} from 'react'

export function SearchDialog(){
  const [search, setSearch] = useState("")

  function updateData(e){
    setSearch(e.target.value)
  }

  function searchAPI(){
    fetch('https://api.scryfall.com/cards/search?order=name&q=' + search)
      .then(function(response){
        //displayResults(response)
        console.log(response)
      })
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={searchAPI}>Search</button>
    </>
  )
}