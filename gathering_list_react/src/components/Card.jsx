import { btnAction } from "./SharedFunctions";
import { FoilRadio } from "./FoilRadio";

export function Card({card, btn}) {
  let imgURL = card.image_uris.small;

  return(
    <div className="card">
      <img src={imgURL} alt={card.name} />
      <div>{card.name}</div>
      <FoilRadio foil={card.foil} nonfoil={card.nonfoil} />
      <button onClick={btnAction}>{btn}</button>
    </div>
  )
}