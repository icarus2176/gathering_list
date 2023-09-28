import { Card } from "./Card";

export function CardDisplay({cards}){
  let allCards = [];
  console.log(cards);

  for(let i = 0; i < cards.length; i++){
    
    allCards.push(<Card 
      name={cards[i].name} 
      imgURL={cards[i].image_uris.small} 
      key={i}
    />)
  }

  console.log(allCards)

  return(
    <>
      {allCards}
    </>
  )
}