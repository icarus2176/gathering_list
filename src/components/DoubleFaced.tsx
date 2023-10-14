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

export function DoubleFaced({card, doBtn, btn}: Props) {
  let frontURL = card[0].card_faces[0].image_uris.normal;
  let backURL = card[0].card_faces[1].image_uris.normal;
  const [show, setShow]  = useState({display: 'none'});
  const [foil, setFoil] = useState(card[1]);
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

  function makeVisible(){
    setShow({display: 'block'});
  }

  function makeInvisible(){
    setShow({display: 'none'});
  }

  const foilOptions = findFoil(card[0])

  if(foilOptions[1] == false && foil == "nonfoil"){
    setFoil("foil");
  }
  
  const price = findCost(card[0], foil);

  return(
    <div className={foil}>
      <img src={imgURL} alt={card.name} onClick={showBack} ref={imgRef} onMouseEnter={makeVisible} onMouseLeave={makeInvisible}/>
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