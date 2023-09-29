export function Card({card, btnAction, printing}) {
  let imgURL = card.image_uris.small;

  function doBtn(){
    console.log(printing, card.name)
    btnAction(printing, card.name);
  }

  return(
    <div className="card">
      <img src={imgURL} alt={card.name} />
      <div>{card.name}</div>
      <button onClick={doBtn}>Button</button>
    </div>
  )
}