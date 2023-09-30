import { Card } from "./Card";
import { DoubleFaced } from "./DoubleFaced";
import { CardButton } from "./CardButton";

export function CardDisplay({cards, doBtn, btn}){
  let allCards = [];
  for(let i = 0; i < cards.length; i++){
    if(cards[i].image_uris){ 
      allCards.push(
        <div key={i}>
          <Card card={cards[i]} />
          <CardButton card={cards[i]} doBtn={doBtn} btn={btn} />
        </div>
      )
    } else {
      allCards.push(
        <div key={i}>
          <DoubleFaced card={cards[i]} key={i} />
          <CardButton card={cards[i]} doBtn={doBtn} btn={btn} />
        </div>
        )
    }
  }

  return(
    <>
      {allCards}
    </>
  )
}