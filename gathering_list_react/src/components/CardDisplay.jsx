import { Card } from "./Card";
import { DoubleFaced } from "./DoubleFaced";

export function CardDisplay({cards}){
  let allCards = [];

  for(let i = 0; i < cards.length; i++){

    if(cards[i].image_uris){
      allCards.push(<Card card={cards[i]} key={i} />)
    } else {
      allCards.push(<DoubleFaced card={cards[i]} key={i} />)
    }
  }

  return(
    <>
      {allCards}
    </>
  )
}