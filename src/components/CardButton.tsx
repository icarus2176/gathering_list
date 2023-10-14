type Props = {
  card: any,
  doBtn: Function,
  btn: string,
  foil: string
}

export function CardButton({card, doBtn, btn, foil}: Props){
  function btnAction(){

    doBtn(card, btn, foil);
  }

  return(
    <button onClick={btnAction}>{btn}</button>
  )
}