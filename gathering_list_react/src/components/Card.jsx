export function Card(name, imgURL) {
  return(
    <div className="card">
      <img src={imgURL} alt={name} />
      <div>{name}</div>
    </div>
  )
}