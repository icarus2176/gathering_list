import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'
import "./SearchDialog.css"

type Props = {
  doBtn: Function,
  closeDialog: Function
}
export function SearchDialog({doBtn, closeDialog}: Props){
  console.log("change to form")
  const [name, setName] = useState("")
  const [type, setType] = useState("all");
  const [cardList, setCardList] = useState([])

  function updateName(e){
    setName(e.target.value)
  }

  function updateType(e){
    setType(e.target.value)
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
        <form>
          <input type="text" onChange={updateName} value={name}/>
          <button onClick={searchData}>Search</button>
        </form>
        <button onClick={closeDialog}>X</button>
      </div>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}