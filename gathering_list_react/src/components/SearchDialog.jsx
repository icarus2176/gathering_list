import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'

export function SearchDialog({doBtn}){
  const [search, setSearch] = useState("")
  const [cardList, setCardList] = useState([])

  function updateData(e){
    setSearch(e.target.value)
  }

  function searchData(){
    findCards('https://api.scryfall.com/cards/search?unique=prints&order=name&q=', search);
  }

  async function findCards(APIURL, searchTerm){
    const cards = await searchAPI(APIURL, searchTerm);
    console.log(cards)
    setCardList(cards)
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={searchData}>Search</button>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}