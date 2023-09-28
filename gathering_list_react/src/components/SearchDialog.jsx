import {Card} from './Card'
import { CardDisplay } from './CardDisplay'
import {useState} from 'react'

export function SearchDialog(){
  const [search, setSearch] = useState("")
  const [cardList, setCardList] = useState([])

  function updateData(e){
    setSearch(e.target.value)
  }

  async function findCards(){
    const cards = await searchAPI();
    setCardList(cards);
  }

  async function searchAPI(){
    const response = fetch('https://api.scryfall.com/cards/search?order=name&q=' + search)
      .then((response) => response.json())
      .then((cardData) => {
        return cardData.data;
      })

      return response;
  }

  return(
    <>
      <input type="text" onChange={updateData} value={search}/>
      <button onClick={findCards}>Search</button>
      <CardDisplay cards={cardList} />
    </>
  )
}