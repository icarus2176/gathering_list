import { findFoil } from "./SharedFunctions";
import { FoilRadio } from "./FoilRadio";

export function Card({card, btn}) {
  let imgURL = card.image_uris.small;

  const foilOptions = findFoil(card)

  return(
    <div className="card">
      <img src={imgURL} alt={card.name} />
      <div>{card.name}</div>
      <FoilRadio foil={foilOptions[0]} nonfoil={foilOptions[1]} />
    </div>
  )
}