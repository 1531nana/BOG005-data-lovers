import {
  showData,
  showOrder,
  filterHuman,
  filterAlien,
  showRandom,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
let dataRyM = data;
let showDatas = showData(dataRyM);

// variables del DOM
let btnInit = document.getElementById("init");
let screenAllCharacteres = document.getElementById("screen-all-characteres");
let btnCurious = document.getElementById("curious-fact");
let boxCurious = document.getElementById("curious-box");
let btnHuman = document.getElementById("human");
let btnAlien = document.getElementById("alien");
let btnMainCharacteres = document.getElementById("button-main-characteres");
let pageStart = document.getElementById("page-start");
let pageCharacteres = document.getElementById("page-characteres");
let btnCharacteres = document.getElementById("button-characteres");
let btnRigth = document.getElementById("rigth");
let btnLeft = document.getElementById("left");
let btnOrderAZ = document.getElementById("order-a-z");
let btnOrderZA = document.getElementById("order-z-a");
let screenMainCharacteres = document.getElementById("screen-main-characteres");

//declaración de variables
let showRandom1 = showRandom(showDatas);
let positionStart = -15;
let positionEnd = 0;
let sizeData = showDatas.length;
let acum = "";
let addDiv;

//Incializar estilos
pageStart.style.display = "visible";
pageCharacteres.style.display = "none";
btnLeft.style.display = "none";
boxCurious.style.display = "none";

//función rigth() con forEach
const rigth = () => {
  screenMainCharacteres.style.display = "none";
  boxCurious.style.display = "none";
  positionStart += 15;
  positionEnd += 15;
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screenAllCharacteres.style.display = "visible";
  screenAllCharacteres.innerHTML = "";
  if (positionStart >= 15) {
    btnLeft.style.display = "block";
  }
  acum = "";
  showDatas.forEach((element, index) => {
    if (positionEnd >= sizeData) {
      btnRigth.style.display = "none";
      return;
    } else if (index >= positionStart && index < positionEnd) {
      addDiv = `
           <div id=${"div" + index} >
           <img src=${element.image} id=${"img" + index}>
           <span id=${"name" + index}>${element.name}</span>
           </div>
           `;
      acum += addDiv;
      screenAllCharacteres.innerHTML = acum;
    }
  });
};
btnCharacteres.addEventListener("click", rigth);
btnRigth.addEventListener("click", rigth);

//función refactorizada
let dataCopied = (datas) => {
  return (
    (showDatas = showData(dataRyM)),
    (showDatas = datas(showDatas)),
    (sizeData = showDatas.length),
    (positionStart = -15),
    (positionEnd = 0),
    rigth()
  );
};

const left = () => {
  screenMainCharacteres.style.display = "none";
  positionStart -= 15;
  positionEnd -= 15;
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screenAllCharacteres.style.display = "grid";
  btnRigth.style.display = "block";
  if (positionStart < 0) {
    positionStart = 0;
    positionEnd = 15;
    btnLeft.style.display = "none";
    return;
  } else if (positionStart >= 15) {
    btnLeft.style.display = "block";
  }
  screenAllCharacteres.innerHTML = "";
  acum = "";
  showDatas.forEach((element, index) => {
    if (index >= positionStart && index < positionEnd) {
      addDiv = `
              <div id=${"div" + index} >
              <img src=${element.image} id=${"img" + index}>
              <span id=${"name" + index}>${element.name}</span>
               </div>
              `;
      acum += addDiv;
      screenAllCharacteres.innerHTML = acum;
    }
  });
};
btnLeft.addEventListener("click", left);

//función para volver a la página de inicio
const home = () => {
  screenMainCharacteres.style.display = "none";
  pageCharacteres.style.display = "none";
  pageStart.style.display = "grid";
  boxCurious.style.display = "none";
  positionStart = -15;
  positionEnd = 0;
  showDatas = showData(dataRyM);
};
btnInit.addEventListener("click", home);

// función para el botón ordenar de la A-Z
const selectOrder = () => {
  screenMainCharacteres.style.display = "none";
  screenAllCharacteres.style.display = "grid";
  btnRigth.style.display = "block";
  dataCopied(showOrder);
};
btnOrderAZ.addEventListener("click", selectOrder);

// función para el botón ordenar de la Z-A
const orderReverse = () => {
  screenMainCharacteres.style.display = "none";
  screenAllCharacteres.style.display = "grid";
  btnRigth.style.display = "block";
  showDatas = showData(dataRyM);
  showDatas = showOrder(showDatas).reverse();
  positionStart = -15;
  positionEnd = 0;
  rigth();
};
btnOrderZA.addEventListener("click", orderReverse);

//función para filtrar por especies humanas
const filtersHuman = () => {
  screenMainCharacteres.style.display = "none";
  screenAllCharacteres.style.display = "grid";
  btnRigth.style.display = "block";
  dataCopied(filterHuman);
};
btnHuman.addEventListener("click", filtersHuman);

//función para filtrar por especies aliens
const filtersAliens = () => {
  screenMainCharacteres.style.display = "none";
  screenAllCharacteres.style.display = "grid";
  btnRigth.style.display = "block";
  dataCopied(filterAlien);
};
btnAlien.addEventListener("click", filtersAliens);

//función muestra los personajes principales
let showMainCharacteres = () => {
  boxCurious.style.display = "none";
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screenAllCharacteres.style.display = "none";
  screenMainCharacteres.style.display = "visible";
  btnRigth.style.display = "none";
  btnLeft.style.display = "none";
  screenMainCharacteres.innerHTML = "";
  acum = "";
  for (let i = 0; i < 5; i++) {
    addDiv = `
      <div id=${"divMain" + i} class=${"card"}>
      <div id=front class=face>
      <img src=${showDatas[i].image} id=${"imgMain" + i}>
      <span id=${"nameMain" + i}>${showDatas[i].name}</span>
      </div>
      <div id=back class=face>
      <span id=${"nameMain" + i}>Name: ${showDatas[i].name} <br> 
      Specie: ${showDatas[i].species} <br>
      Status: ${showDatas[i].status} <br> 
      Gender: ${showDatas[i].gender} </span>
      </div>
      </div>  
        `;
    acum += addDiv;
    screenMainCharacteres.innerHTML = acum;
  }
};
btnMainCharacteres.addEventListener("click", showMainCharacteres);

//arreglo, que almacena los mensajes aleatorios para el usuario (cálculo)
let datosRan = [
  " En la serie hay " + showRandom1.male + " personajes masculinos.",
  " En la serie hay " + showRandom1.female + " personajes femeninos.",
  " En la serie hay " + showRandom1.genderUndefined + " personajes de género indefinido.",
  " En la serie hay " + showRandom1.alive + " personajes vivos.",
  " En la serie hay " + showRandom1.dead + " personajes muertos.",
  " En la serie hay " + showRandom1.statusUndefined + " personajes de estatus indefinidos",
];

//función que muestra en una textarea el mensaje aleatorio
const datesRandom = () => {
  screenMainCharacteres.style.display = "none";
  pageStart.style.display = "none";
  screenAllCharacteres.style.display = "none";
  btnRigth.style.display = "none";
  btnLeft.style.display = "none";
  boxCurious.style.display = "block";
  let aleatorie = datosRan[Math.floor(Math.random() * datosRan.length)];
  boxCurious.textContent = aleatorie;
};
btnCurious.addEventListener("click", datesRandom);
