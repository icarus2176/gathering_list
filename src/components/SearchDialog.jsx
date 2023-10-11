import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'
import "./SearchDialog.css"

export function SearchDialog({doBtn, closeDialog}){
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
    setCardList(cards.map((x) => [x, "nonfoil"]))
  }

  function enterKey(e){
    if (e.keyCode === 13){
      searchData();
    }
  }

  return(
    <>
      <div className="searchBar" onKeyDown={enterKey}>
        <input type="text" onChange={updateData} value={search}/>
        <button onClick={searchData}>Search</button>
        <button onClick={closeDialog}>X</button>
      </div>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}