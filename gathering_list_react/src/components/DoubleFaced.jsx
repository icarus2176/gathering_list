import React, {useState} from "react";

export function DoubleFaced({card}) {
  let frontURL = card.card_faces[0].image_uris.small;
  let backURL = card.card_faces[1].image_uris.small;
  const imgRef = React.useRef(null);
  const [imgURL, setImgURL] = useState(frontURL)

  function showBack(e){
    if(imgURL == frontURL){
      imgRef.current.src = backURL;
      setImgURL(backURL);
    }else{
      imgRef.current.src = frontURL;
      setImgURL(frontURL);
    }
  }

  return(
    <div className="card">
      <img src={imgURL} alt={card.name} onClick={showBack} ref={imgRef}/>
      <div>{card.name}</div>
    </div>
  )
}