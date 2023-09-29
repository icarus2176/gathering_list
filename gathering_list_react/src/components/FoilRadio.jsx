export function FoilRadio({foil, nonfoil}){
  return(
    <form>
      <input type="radio" id="nonfoil" name="foil" value="foil" disabled={!nonfoil}/>
      <label htmlFor="nonfoil">Nonfoil</label>
      <input type="radio" id="foil" name="foil" value="foil" disabled={!foil}/>
      <label htmlFor="foil">Foil</label>
    </form>
  )
}