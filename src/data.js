
export const showData = (element) => {
  let listImage = element['results'].map(total => total.image);
  let listName = element['results'].map(total => total.name);
  let listSpecies = element['results'].map(total => total.species);
  let listGender = element['results'].map(total => total.gender);
  let listStatus = element['results'].map(total => total.status);

  function createItem(name, image, species, gender, status) {
    this.name = name;
    this.image = image;
    this.species = species;
    this.gender = gender;
    this.status = status;
  }
  let dataToOrder = [];

  for (let i = 0; i < listImage.length; i++) {
    let createObject = new createItem(listName[i], listImage[i], listSpecies[i], listGender[i], listStatus[i]);
    dataToOrder.push(createObject);
  }
  return dataToOrder
}


export const showOrder = (element) => {

  const compareName = (a, b) => {

    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return 1;
    }
    return 0;
  }

  element.sort(compareName);

  return element;

}

export const filterHuman = (element) => {
  let filtro = element.filter(element => element.species == "Human")
  return filtro
}

export const filterAlien = (element) => {
  let filtros = element.filter(element => element.species == "Alien")
  return filtros;
}

//   export const dataCurious = (element)=> {
//     let genderF = 0;
//     let genderM = 0;
//     let genderU = 0;
//         element.forEach(element => {
//       if(element.gender== "Female"){
//        genderF ++;
//       } else if (element.gender == "Male"){
//         genderM ++;
//       } else {
//         genderU ++;
//   }});
//   let dataGender = [];
// dataGender.push(genderF, genderM, genderU);

//   let statusA = 0;
//   let statusD = 0;
//   let statusU = 0;
//   element.forEach(element => {
//     if(element.status == "Alive"){
//       statusA ++;
//     } else if (element.status == "Dead"){
//       statusD ++;
//     } else {
//       statusU ++; 
//     }});
//     let dataStatus = [];
//     dataStatus.push(statusA, statusD, statusU);

//     let dataRandom = [];
//     dataRandom.push(dataGender);
//     dataRandom.push(dataStatus);
//   return (dataRandom)
//   }

export const dataCurious = (element) => {
  let dataRandom = [];

  let genderF = 0;
  let genderM = 0;
  let genderU = 0;
  element.forEach(element => {
    if (element.gender == "Female") {
      genderF++;
    } else if (element.gender == "Male") {
      genderM++;
    } else {
      genderU++;
    }
  });

  let statusA = 0;
  let statusD = 0;
  let statusU = 0;
  element.forEach(element => {
    if (element.status == "Alive") {
      statusA++;
    } else if (element.status == "Dead") {
      statusD++;
    } else {
      statusU++;
    }
  });

  // objeto pero es mas facil crear el objeto directo
  // function createDataCurious (female, male, unknown){
  //   this.female = female;
  //   this.male = male;
  //   this.unknown = unknown;}
let dataGender = {
  Female: genderF,
  Male: genderM,
  Unknown: genderU,
};
dataRandom.push(dataGender);

let dataStatus = {
  Alive: statusA,
  Dead: statusD,
  Unknown: statusU,
}
dataRandom.push(dataStatus);


// let createObjectGender = new createDataCurious (genderF, genderM, genderU);
console.log("datarandom", dataRandom)
return dataRandom;
}