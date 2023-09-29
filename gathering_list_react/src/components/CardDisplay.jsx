import { Card } from "./Card";
import { DoubleFaced } from "./DoubleFaced";
import { doBtn } from "./SharedFunctions";
import { findCards } from './SharedFunctions'

export function CardDisplay({cards, findCards}){
  let allCards = [];

  const printingURL = 'https://api.scryfall.com/cards/search?unique=prints&order=name&q=';

  for(let i = 0; i < cards.length; i++){

    if(cards[i].image_uris){
      allCards.push(<Card card={cards[i]} key={i} 
        btnAction={findCards} printing={printingURL}
      />)
    } else {
      allCards.push(<DoubleFaced card={cards[i]} key={i} 
        btnAction={findCards}  printing={printingURL}
      />)
    }
  }

  return(
    <>
      {allCards}
    </>
  )
}