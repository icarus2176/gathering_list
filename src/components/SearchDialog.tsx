import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'
import "./SearchDialog.css"

type Props = {
  doBtn: Function,
  closeDialog: Function
}
export function SearchDialog({doBtn, closeDialog}: Props){
  console.log("got rid of searchtterm")
  const [name, setName] = useState("")
  const [cardList, setCardList] = useState([])

  function updateData(e){
    setName(e.target.value)
  }

  function searchData(){
    findCards('https://api.scryfall.com/cards/search?unique=prints&order=name&q=' + name + "+game%3Apaper");
  }

  async function findCards(APIURL){
    const cards = await searchAPI(APIURL);
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
        <input type="text" onChange={updateData} value={name}/>
        <button onClick={searchData}>Search</button>
        <button onClick={closeDialog}>X</button>
      </div>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}