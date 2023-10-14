import React, {useState} from "react";
import { findFoil, findCost } from "./SharedFunctions";
import { FoilRadio } from "./FoilRadio";
import { CardInfo } from "./CardInfo";
import { CardButton } from "./CardButton";
import "./Card.css";

type Props = {
  card: any,
  doBtn: Function,
  btn: string
}

export function Card({card, doBtn, btn}: Props) {

  let imgURL = card[0].image_uris.normal;
  const [show, setShow]  = useState({display: 'none'});
  const [foil, setFoil] = useState(card[1]);

  const foilOptions = findFoil(card[0]);

  if(foilOptions[1] == false && foil == "nonfoil"){
    setFoil("foil");
  }

  const price = findCost(card[0], foil);

  function makeVisible(){
    setShow({display: 'block'});
  }

  function makeInvisible(){
    setShow({display: 'none'});
  }
  
  return(
    <div className={foil} >
      <img className="cardImg" src={imgURL} alt={card.name} onMouseEnter={makeVisible} onMouseLeave={makeInvisible}/>
      <div className="info" style={show}>
        <CardInfo card={card[0]} />
      </div>
      <div className="price">
        <div>${price}</div>
        <FoilRadio foil={foilOptions[0]} nonfoil={foilOptions[1]} setFoil={setFoil}  currentFoil={foil}/>
      </div>
      <CardButton card={card[0]} doBtn={doBtn} btn={btn} foil={foil} />
    </div>
  )
}