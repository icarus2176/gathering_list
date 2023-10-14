type Props = {
  card: any[],
  doBtn: Function,
  btn: string,
  foilRef: any
}

export function CardButton({card, doBtn, btn, foilRef}: Props){
  function btnAction(){
    let isFoil;
    if(foilRef.current.classList.contains("foil")){
      isFoil = "foil";
    } else{
      isFoil = "nonfoil";
    }

    doBtn(card, btn, isFoil);
  }

  return(
    <button onClick={btnAction}>{btn}</button>
  )
}