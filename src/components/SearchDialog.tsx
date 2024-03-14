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
    let searchTerm = 'https://api.scryfall.com/cards/search?unique=prints&order=name&q=' + compilefilters() + "+game%3Apaper";
    findCards(searchTerm);
  }

  function compilefilters(){
    let array = []

    array.push(name);

    if(textbox != ""){
      array.push("oracle%3A" + textbox);
    }

    if(color.length > 1){
        array.push(color.join(""))
    }

    if(type != "all"){
      array.push("type%3A" + type);
    }

    if(rarity  != "all"){
      array.push("rarity%3A" + rarity);
    }

    return array.join("+");
  }

  async function findCards(APIURL){
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
          <label htmlFor="textbox">Oracle Text</label>
          <input type="text" id="textBox" onChange={updateTextbox} value={textbox}/>
          <label htmlFor="type">Type</label>
          <select id='type' form="searchBar" onChange={updateType} value={type}>
            <option value="all"></option>
            <option value="artifact">Artifact</option>
            <option value="battle">Battle</option>
            <option value="creature">Creature</option>
            <option value="enchantment">Enchantment</option>
            <option value="instant">Instant</option>
            <option value="land">Land</option>
            <option value="planeswalker">Planeswalker</option>
            <option value="sorcery">Sorcery</option>
          </select>
          <div className='color'>
            <input type="checkbox" id="W" value={"W"} onChange={updateColor}/>
            <label htmlFor="W">White</label>
            <input type="checkbox" id="U" value={"U"} onChange={updateColor}/>
            <label htmlFor="U">Blue</label>
            <input type="checkbox" id="B" value={"B"} onChange={updateColor}/>
            <label htmlFor="B">Black</label>
            <input type="checkbox" id="R" value={"R"} onChange={updateColor}/>
            <label htmlFor="R">Red</label>
            <input type="checkbox" id="G" value={"G"} onChange={updateColor}/>
            <label htmlFor="G">Green</label>
            <input type="checkbox" id="C" value={"C"} onChange={updateColor}/>
            <label htmlFor="C">Colorless</label>
          </div>
          <label htmlFor="rarity">Rarity</label>
          <select id='rarity' form="searchBar" onChange={updateRarity} value={rarity}>
            <option value="all"></option>
            <option value="c">Common</option>
            <option value="u">Uncommon</option>
            <option value="r">Rare</option>
            <option value="m">Mythic</option>
          </select>
          <button onClick={searchData}>Search</button>
        </form>
        <button onClick={closeDialog}>X</button>
      </div>
      <CardDisplay cards={cardList} doBtn={doBtn} btn={"Add Card"}/>
    </>
  )
}