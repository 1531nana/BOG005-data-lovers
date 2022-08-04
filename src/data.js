
// export const showImage = (element) => {
//    let listImage = element['results'].map(total => total.image);
//      return listImage;
// };


// export const showName = (element) => {
//   let listName = element['results'].map(total => total.name);
//   return listName;
// };

// export const showOrder = (element) => {
//   let dataToOrder = new Object();
//   dataToOrder.image = element['results'].map(total => total.image);
//   dataToOrder.name=element['results'].map(total => total.name);
//   console.log('objeto datatoorder', dataToOrder);
//   return dataToOrder
// }
export const showData = (element) => {
let listImage = element['results'].map(total => total.image);
let listName = element['results'].map(total => total.name);
//estructura del objeto 
function createItem  (image, name){
  this.image = image;
  this.name = name;
}

let createObject; 
let dataToOrder= [];
for(let i = 0 ; i<listName.length; i++){
  createObject = new createItem (listImage[i], listName[i]);
  dataToOrder.push(createObject);
}
// console.log('ver crea objeto', createObject )
// console.log('ver dataorder', dataToOrder)

return dataToOrder
}

export const showOrder = (element) => {

  function compareName(a,b){
  
  if ( a.name.toLowerCase() < b.name.toLowerCase()){
    return -1;
  }
  if ( a.name.toLowerCase() > b.name.toLowerCase()){
    return 1;
  }
  return 0;
}
element.sort(compareName);
console.log("ordenado", element);
return element;
}


// export const showData = (a, b) => {
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
