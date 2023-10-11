//moved functions to separate file to avoid prop drilling

export async function searchAPI(APIURL, searchTerm){
  const response = fetch(APIURL + searchTerm)
    .then((response) => response.json())
    .then((cardData) => {
      return cardData.data;
    })

    return response;
}

export function findFoil(card){
  let foil = card.foil;
  let nonfoil = card.nonfoil;

  if(card.finishes && card.finishes.includes("etched")){
    foil = true;
  }

  return [foil, nonfoil];
}