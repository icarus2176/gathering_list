import { CardDisplay } from './CardDisplay'
import {useState} from 'react'

export function SearchDialog({searchAPI}){
  const [search, setSearch] = useState("")
  const [cardList, setCardList] = useState([])

  function updateData(e){
    setSearch(e.target.value)
  }

  async function findCards(APIURL, searchTerm){
    const cards = await searchAPI(APIURL, searchTerm);
    setCardList(cards);
    console.log(cards)
  }

  function searchData(){
    findCards('https://api.scryfall.com/cards/search?order=name&q=', search);
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={searchData}>Search</button>
      <CardDisplay cards={cardList} findCards={findCards}/>
    </>
  )
}