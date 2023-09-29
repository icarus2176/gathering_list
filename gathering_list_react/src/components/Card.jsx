export function Card({card}) {
  let imgURL = card.image_uris.small;

  return(
    <div className="card">
      <img src={imgURL} alt={card.name} />
      <div>{card.name}</div>
    </div>
  )
}