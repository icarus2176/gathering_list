export function FoilRadio({foil, nonfoil, foilRef, currentFoil}){
  function removeFoil(){
    foilRef.current.classList.replace("foil", "nonfoil");
  }

  function addFoil(){
    foilRef.current.classList.replace("nonfoil", "foil");
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