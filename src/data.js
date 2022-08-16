//función que itera sobre los datos image, name, species, gender, status
export const showData = (element) => {
  let listName = element["results"].map((total) => total.name);
  let listImage = element["results"].map((total) => total.image);
  let listSpecies = element["results"].map((total) => total.species);
  let listGender = element["results"].map((total) => total.gender);
  let listStatus = element["results"].map((total) => total.status);

  //función constructora, para crearle una propiedad a cada objeto
  function createItem(name, image, species, gender, status) {
    this.name = name;
    this.image = image;
    this.species = species;
    this.gender = gender;
    this.status = status;
  }
  //ciclo que añade cada valor a su determinada propiedad
  let dataToOrder = [];
  for (let i = 0; i < listImage.length; i++) {
    let createObject = new createItem(
      listName[i],
      listImage[i],
      listSpecies[i],
      listGender[i],
      listStatus[i]
    );
    dataToOrder.push(createObject);
  }
  return dataToOrder;
};

//función que exporta los datos ordenados de la A-Z
export const showOrder = (element) => {
  const compareName = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
  };
  return element.sort(compareName);
};



//función que filtra especies humanas
export const filterHuman = (element) => {
  return  element.filter((element) => element.species == "Human");
};

//función que filtra especies aliens
export const filterAlien = (element) => {
  return element.filter((element) => element.species == "Alien");
};

//función que muestra el cálculo
export const showRandom = (element) => {
  let gender1 = element.map((element) => element.gender);
  let showMale = gender1.filter((element) => element === "Male");
  let showFemale = gender1.filter((element) => element === "Female");
  let showUndefined = gender1.filter((element) => element === "unknown");
  let status1 = element.map((element) => element.status);
  let showAlive = status1.filter((element) => element === "Alive");
  let showDead = status1.filter((element) => element === "Dead");
  let showUnknow = status1.filter((element) => element === "unknown");
  let dataRandom = {
    male: showMale.length,
    female: showFemale.length,
    genderUndefined: showUndefined.length,
    alive: showAlive.length,
    dead: showDead.length,
    statusUndefined: showUnknow.length,
  };
  return dataRandom;
};
