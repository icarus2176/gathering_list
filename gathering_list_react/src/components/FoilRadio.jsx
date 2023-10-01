export function FoilRadio({foil, nonfoil, foilRef, currentFoil}){
  function removeFoil(){
    foilRef.current.classList.replace("foil", "nonfoil");
    console.log(foilRef.current.classList);
  }

  function addFoil(){
    foilRef.current.classList.replace("nonfoil", "foil");
    console.log(foilRef.current.classList);
  }

  let foilButton;
  let nonFoilButton;

  if(currentFoil == "foil"){
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