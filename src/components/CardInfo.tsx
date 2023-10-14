import "./CardInfo.css"

type Props = {
  card: any
}

export function CardInfo({card}: Props){
  return(
    <div className="cardInfo">
      <div className="topCard">
        <div>{card.name}</div>
        <div>{card.mana_cost}</div>
      </div>
      <div>{card.type_line}</div>
      <div>{card.oracle_text}</div>
      <div>Set: {card.set_name}</div>
    </div>
  )
}