import React, {useState} from "react";
import { findFoil } from "./SharedFunctions";
import { FoilRadio } from "./FoilRadio";
import "./Card.css";
import { CardButton } from "./CardButton";

export function DoubleFaced({card, doBtn, btn}) {
  let frontURL = card[0].card_faces[0].image_uris.normal;
  let backURL = card[0].card_faces[1].image_uris.normal;
  const foilRef = React.useRef(null);
  const imgRef = React.useRef(null);
  const [imgURL, setImgURL] = useState(frontURL)

  function showBack(){
    if(imgURL == frontURL){
      imgRef.current.src = backURL;
      setImgURL(backURL);
    }else{
      imgRef.current.src = frontURL;
      setImgURL(frontURL);
    }
  }

  const foilOptions = findFoil(card[0])

  return(
    <div className={card[1]} ref={foilRef}>
      <img src={imgURL} alt={card.name} onClick={showBack} ref={imgRef}/>
      <FoilRadio foil={foilOptions[0]} nonfoil={foilOptions[1]} foilRef={foilRef} />
      <CardButton card={card[0]} doBtn={doBtn} btn={btn} foilRef={foilRef} currenFoil={card[1]} />
    </div>
  )
}