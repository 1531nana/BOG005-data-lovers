
// export const showImage = (element) => {
//   //  let imageCharacter = Object.values(element);
//   //  let listImage = imageCharacter[1].map(total => total.image);
//    let listImage = element['results'].map(total => total.image);
//   //  console.log(listImage);
//      return listImage;
// };


// export const showName = (element) => {
//   // let nameCharacter = Object.values(element);
//   // // console.log(nameCharacter);
//   // let listName = nameCharacter[1].map(total => total.name);
//   let listName = element['results'].map(total => total.name);

//   return listName;
// };

export const showData = (element) => {
  let listImage = element['results'].map(total => total.image);
  let listName = element['results'].map(total => total.name);
  let listSpecies = element['results'].map(total => total.species);

  function createItem(name, image, species) {
    this.name = name;
    this.image = image;
    this.species = species;
  }
  let dataToOrder = [];

  for(let i = 0; i < listImage.length; i++){
    let createObject = new createItem(listName[i], listImage[i], listSpecies[i]);  
    dataToOrder.push(createObject);
  }
  // console.log("for "+dataToOrder);
return dataToOrder
}


export const showOrder = (element) => {

  const compareName =(a, b) => {

    if ( a.name.toLowerCase() < b.name.toLowerCase()){
      return -1;
    }
    if ( a.name.toLowerCase() > b.name.toLowerCase()){
      return 1;
    }
    return 0;
  }

   element.sort(compareName);
  // console.log(information);
  return element;

}

export const filterHuman = (element) => {
  let filtro = element.filter(element =>  element.species == "Human") 
  return filtro}

  export const filterAlien = (element) => {
    let filtros = element.filter(element =>  element.species == "Alien") 
    console.log(filtros);
    return filtros}
  
//     if(element.species){
//      return humans.push(element);
//   }
//   if(element.species == "Aliens"){
//     return aliens.push(element);
//   }
//   // console.log(filtro);
// }

// )
// return filtro, aliens, humans;
// }

// export const ordenar = (element) =>{
//   let order = element.map(showName().concat(showImage()));
//   return order;
// }

// export const showOrder = (a, b) => {
// // let sortImage = showImage();
// // let sortName = showName();
// // let sortImageAndName = sortImage + sortName;
// if(a.name < b.name ){
// return -1;
// } else if (a.name > b.name){
//   return 1;
// }
// return 0;
// }

// export const showNameAndImageSort = (element) => {
//   let nameAndImageSort = showName().sort(element)
//   return nameAndImageSort;
//   // element['results'].sort((total => total.name))
// }
