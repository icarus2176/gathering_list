import { CardDisplay } from './CardDisplay'
import {useState} from 'react'
import { searchAPI } from './SharedFunctions'
import "./SearchDialog.css"

type Props = {
  doBtn: Function,
  closeDialog: Function
}

export function SearchDialog({doBtn, closeDialog}: Props){
  const [name, setName] = useState("");
  const [textbox, setTextbox] = useState("");
  const [color, setColor] = useState([""]);
  const [type, setType] = useState("all");
  const [rarity, setRarity] = useState("all");
  const [cardList, setCardList] = useState([]);

  function updateName(e){
    setName(e.target.value)
  }

  function updateTextbox(e){
    setTextbox(e.target.value)
  }

  function updateColor(e){
    let temp = color;
    if(temp.includes(e.target.value)){
      temp.splice(e.target.value, 1);
    } else{
      temp.push(e.target.value);
    }
    setColor(temp);
  }

  function updateType(e){
    setType(e.target.value)
  }

  function updateRarity(e){
    setRarity(e.target.value)
  }

  function searchData(){
    console.log("search")
    let searchTerm = 'https://api.scryfall.com/cards/search?unique=prints&order=name&q=' + compilefilters() + "+game%3Apaper";
    console.log(searchTerm)
    findCards(searchTerm);
  }

  function compilefilters(){
    let array = []

    array.push(name);

    return array.join("+");
  }

  async function findCards(APIURL){
    console.log("findCards")
    const cards = await searchAPI(APIURL);
    console.log("data received by dialog")
    setCardList(cards.map((x) => [x, "nonfoil"]))
    console.log("mapped cards")
  }

  function enterKey(e){
    if (e.keyCode === 13){
      searchData();
    }
  }


  return(
    <>
      <div id="searchBar" onKeyDown={enterKey}>
        <form className='searchForm'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={updateName} value={name}/>
          <button onClick={searchData}>Search</button>
        </form>
        <button onClick={closeDialog}>X</button>
      </div>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}