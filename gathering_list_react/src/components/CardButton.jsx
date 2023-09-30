export function CardButton({card, doBtn, btn}){
  function btnAction(){
    doBtn(card, btn)
  }

  return(
    <button onClick={btnAction}>{btn}</button>
  )
}