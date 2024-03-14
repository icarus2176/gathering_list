//moved functions to separate file to avoid prop drilling

export async function searchAPI(APIURL){
  console.log("fetch from api")
  const response = fetch(APIURL)
    .then((response) => response.json())
    .then((cardData) => {
      return cardData.data;
    })
    console.log("return promise")

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

export function findCost(card, foil){
  if(card.finishes && card.finishes.includes("etched")){
    return card.prices.usd_etched;
  }else if(foil == "foil"){
    return card.prices.usd_foil;
  } else {
    return card.prices.usd;
  }
}