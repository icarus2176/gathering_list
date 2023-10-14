type Props = {
  foil: boolean,
  nonfoil: boolean,
  setFoil: Function,
  currentFoil: string
}

export function FoilRadio({foil, nonfoil, setFoil, currentFoil}: Props){
  function removeFoil(){
    setFoil("nonfoil");
  }

  function addFoil(){
    setFoil("foil");
  }

  let foilButton;
  let nonFoilButton;

  if(currentFoil === "foil" || nonfoil === false){
    foilButton = <input type="radio" id="foil" name="foil" value="foil" disabled={!foil} onClick={addFoil} defaultChecked={true} />;
    nonFoilButton = <input type="radio" id="nonfoil" name="foil" value="foil" disabled={!nonfoil} onClick={removeFoil} />;

  } else{
    foilButton = <input type="radio" id="foil" name="foil" value="foil" disabled={!foil} onClick={addFoil} />;
    nonFoilButton = <input type="radio" id="nonfoil" name="foil" value="foil" disabled={!nonfoil} onClick={removeFoil} defaultChecked={true} />;
  }

  return(
    <form>
      {nonFoilButton}
      <label htmlFor="nonfoil">Nonfoil</label>
      {foilButton}
      <label htmlFor="foil">Foil</label>
    </form>
  )
}