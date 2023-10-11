export function CardButton({card, doBtn, btn, foilRef}){
  function btnAction(){
    let isFoil;
    if(foilRef.current.classList.contains("foil")){
      isFoil = "foil";
    } else{
      isFoil = "nonfoil";
    }

    console.log(isFoil);
    doBtn(card, btn, isFoil);
  }

  return(
    <button onClick={btnAction}>{btn}</button>
  )
}