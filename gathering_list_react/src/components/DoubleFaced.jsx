import React from "react";

export function DoubleFaced({card}) {
  let frontURL = card.card_faces[0].image_uris.small;
  let backURL = card.card_faces[1].image_uris.small;
  const imgRef = React.useRef(null);

  function showBack(e){
    imgRef.current.src=backURL;
  }

  return(
    <div className="card">
      <img src={frontURL} alt={card.name} onClick={showBack} ref={imgRef}/>
      <div>{card.name}</div>
    </div>
  )
}