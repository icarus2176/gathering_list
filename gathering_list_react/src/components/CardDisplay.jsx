import { Card } from "./Card";

export function CardDisplay({cards}){
  let allCards = [];

  for(let i = 0; i < cards.length; i++){
    let imgURL = getImgURL(cards[i]);

    allCards.push(<Card 
      name={cards[i].name} 
      imgURL={imgURL} 
      key={i}
    />)
  }

  function getImgURL(card){
    if(card.card_faces){
      return card.card_faces[0].image_uris.small;
    } else{
      return card.image_uris.small
    }
  }

  return(
    <>
      {allCards}
    </>
  )
}