
export const showImage = (element) => {
  //  let imageCharacter = Object.values(element);
  //  let listImage = imageCharacter[1].map(total => total.image);
   let listImage = element['results'].map(total => total.image);
  //  console.log(listImage);
     return listImage;
};


export const showName = (element) => {
  // let nameCharacter = Object.values(element);
  // // console.log(nameCharacter);
  // let listName = nameCharacter[1].map(total => total.name);
  let listName = element['results'].map(total => total.name);

  return listName;
};

// export const showNameAndImageSort = (element) => {
//   let nameAndImageSort = showName().sort(element)
//   return nameAndImageSort;
//   // element['results'].sort((total => total.name))
// }
