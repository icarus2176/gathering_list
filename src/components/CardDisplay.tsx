import { Card } from "./Card";
import { DoubleFaced } from "./DoubleFaced";
import "./CardDisplay.css"

type Props = {
  cards: any[],
  doBtn: Function,
  btn: string
}

export function CardDisplay({cards, doBtn, btn}: Props){
  let allCards = [];
  for(let i = 0; i < cards.length; i++){
    if(cards[i][0].image_uris){ 
      allCards.push(
        <div key={i}>
          <Card card={cards[i]} doBtn={doBtn} btn={btn} />
        </div>
      )
    } else {
      allCards.push(
        <div key={i}>
          <DoubleFaced card={cards[i]} key={i} doBtn={doBtn} btn={btn} />
        </div>
        )
    }
  }

  return(
    <div className="cardDisplay">
      {allCards}
    </div>
  )
}