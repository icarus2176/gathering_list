export async function searchAPI(APIURL, searchTerm){
  const response = fetch(APIURL + searchTerm)
    .then((response) => response.json())
    .then((cardData) => {
      return cardData.data;
    })

    return response;
}

export async function findCards(APIURL, searchTerm){
  const cards = await searchAPI(APIURL, searchTerm);
  console.log(cards)
  return cards
}

export function doBtn(btnAction){
  console.log(printing, card.name)
  btnAction(printing, card.name);
}