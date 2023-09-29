import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'
import { findCards } from './SharedFunctions'


export function SearchDialog(){
  const [search, setSearch] = useState("")
  const [cardList, setCardList] = useState([])

  function updateData(e){
    setSearch(e.target.value)
  }

  

  function searchData(){
    setCardList(findCards('https://api.scryfall.com/cards/search?order=name&q=', search));
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={searchData}>Search</button>
      <CardDisplay cards={cardList} findCards={findCards}/>
    </>
  )
}