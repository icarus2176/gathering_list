//moved functions to separate file to avoid prop drilling

export async function searchAPI(APIURL, searchTerm){
  const response = fetch(APIURL + searchTerm)
    .then((response) => response.json())
    .then((cardData) => {
      return cardData.data;
    })

    return response;
}

const printing = 'https://api.scryfall.com/cards/search?unique=prints&order=name&q=';

export function btnAction(){
  doBtn(card, btn)
}

function doBtn(card, action){
  if (action == "Add Card"){
    console.log(action);
  }else if(action == "Delete"){
    console.log(action);
  }
}