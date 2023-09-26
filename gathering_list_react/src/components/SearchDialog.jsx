import {Card} from './Card'
import {useState} from 'react'

export function SearchDialog(){
  const [search, setSearch] = useState("")

  function updateData(e){
    setSearch(e.target.value)
  }

  function findCards(){
    const cards = searchAPI();
  }

  async function searchAPI(){
    const response = await fetch('https://api.scryfall.com/cards/search?order=name&q=' + search)
    const cardData = await response.json();
    return cardData;
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={findCards}>Search</button>
    </>
  )
}