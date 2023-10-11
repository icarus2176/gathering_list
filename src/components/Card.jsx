import React from "react";
import { findFoil } from "./SharedFunctions";
import { FoilRadio } from "./FoilRadio";
import "./Card.css";
import { CardButton } from "./CardButton";

export function Card({card, doBtn, btn}) {
  let imgURL = card[0].image_uris.normal;
  const foilRef = React.useRef(null);

  const foilOptions = findFoil(card[0])
  let foilClass = card[1]

  if(foilOptions[1] == false){
    foilClass = "foil"
  }
  
  return(
    <div className={foilClass} ref={foilRef} >
      <img src={imgURL} alt={card.name} />
      <FoilRadio foil={foilOptions[0]} nonfoil={foilOptions[1]} foilRef={foilRef}  currentFoil={card[1]}/>
      <CardButton card={card[0]} doBtn={doBtn} btn={btn} foilRef={foilRef} />
    </div>
  )
}