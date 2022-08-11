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
let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showDatas.length;
let btnCurious = document.getElementById("curious_fact");
let boxCurious = document.getElementById("caja_curious");
let btnHuman = document.getElementById("human");
let btnAlien = document.getElementById("alien");
let btnMainCharacteres = document.getElementById("button_main_characteres");
let pageStart = document.getElementById("page_start");
let pageCharacteres = document.getElementById("page_characteres");
let btnCharacteres = document.getElementById("button_characteres");
let btnRigth = document.getElementById("rigth");
let btnLeft = document.getElementById("left");
let btnOrderAZ = document.getElementById("order_a_z");
let btnOrderZA = document.getElementById("order_z_a");
let positionStart = -15;
let positionEnd = 0;
let showRandom1 = showRandom(showDatas);
let screen2 = document.getElementById("screen2");

//Incializar estilos
pageStart.style.display = "visible";
pageCharacteres.style.display = "none";
btnLeft.style.display = "none";
boxCurious.style.display = "none";

//arreglo, que almacena los mensajes aleatorios para el usuario
let datosRan = [
  " En la serie hay " + showRandom1.male + " personajes masculinos.",
  " En la serie hay " + showRandom1.female + " personajes femeninos.",
  " En la serie hay " +
    showRandom1.genderUndefined +
    " personajes de género indefinido.",
  " En la serie hay " + showRandom1.alive + " personajes vivos.",
  " En la serie hay " + showRandom1.dead + " personajes muertos.",
  " En la serie hay " +
    showRandom1.statusUndefined +
    " personajes de estatus indefinidos",
];

//función que muestra en una textarea el mensaje aleatorio
const datesRandom = () => {
  screen2.style.display = "none";
  pageStart.style.display = "none";
  screen1.style.display = "none";
  btnRigth.style.display = "none";
  btnLeft.style.display = "none";
  boxCurious.style.display = "block";
  let aleatorie = datosRan[Math.floor(Math.random() * datosRan.length)];
  boxCurious.textContent = aleatorie;
  return aleatorie;
};
btnCurious.addEventListener("click", datesRandom);

// funcion para la flecha derecha
const rigth = () => {
  screen2.style.display = "none";
  boxCurious.style.display = "none";
  positionStart += 15;
  positionEnd += 15;
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screen1.style.display = "visible";
  screen1.innerHTML = "";
  if (positionStart >= 15) {
    btnLeft.style.display = "block";
  }
  acum = "";
  for (let i = positionStart; i < positionEnd; i++) {
    if (i >= sizeData) {
      btnRigth.style.display = "none";
      return;
    } else {
      addDiv = `
                    <div id=${"div" + i} >
                    <img src=${showDatas[i].image} id=${"img" + i}>
                    <span id=${"name" + i}>${showDatas[i].name}</span>
                    </div>
                    `;
      acum += addDiv;
      screen1.innerHTML = acum;
    }
  }
};
btnCharacteres.addEventListener("click", rigth);
btnRigth.addEventListener("click", rigth);

// funcion para la flecha izquierda
const left = () => {
  screen2.style.display = "none";
  positionStart -= 15;
  positionEnd -= 15;
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screen1.style.display = "grid";
  btnRigth.style.display = "block";
  if (positionStart < 0) {
    positionStart = 0;
    positionEnd = 15;
    btnLeft.style.display = "none";
    return;
  } else if (positionStart >= 15) {
    btnLeft.style.display = "block";
  }
  screen1.innerHTML = "";
  acum = "";
  for (let i = positionStart; i < positionEnd; i++) {
    addDiv = `
            <div id=${"div" + i} >
            <img src=${showDatas[i].image} id=${"img" + i}>
             <span id=${"name" + i}>${showDatas[i].name}</span>
             </div>
            `;
    acum += addDiv;
    screen1.innerHTML = acum;
  }
};
btnLeft.addEventListener("click", left);

//función para volver a la página de inicio
const home = () => {
  screen2.style.display = "none";
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
  screen2.style.display = "none";
  screen1.style.display = "grid";
  btnRigth.style.display = "block";
  // sizeData = showDatas.length;
  showDatas = showData(dataRyM);
  showDatas = showOrder(showDatas);
  positionStart = -15;
  positionEnd = 0;
  rigth();
};
btnOrderAZ.addEventListener("click", selectOrder);

// función para el botón ordenar de la Z-A
const orderReverse = () => {
  screen2.style.display = "none";
  screen1.style.display = "grid";
  btnRigth.style.display = "block";
  // sizeData = showDatas.length;
  showDatas = showData(dataRyM);
  showDatas = showOrder(showDatas).reverse();
  positionStart = -15;
  positionEnd = 0;
  rigth();
};
btnOrderZA.addEventListener("click", orderReverse);

//función para filtrar por especies humanas
const filtersHuman = () => {
  screen2.style.display = "none";
  screen1.style.display = "grid";
  btnRigth.style.display = "block";
  sizeData = showDatas.length;
  showDatas = showData(dataRyM);
  showDatas = filterHuman(showDatas);
  positionStart = -15;
  positionEnd = 0;
  rigth();
};
btnHuman.addEventListener("click", filtersHuman);

//función para filtrar por especies aliens
const filtersAliens = () => {
  screen2.style.display = "none";
  screen1.style.display = "grid";
  btnRigth.style.display = "block";
  sizeData = showDatas.length;
  showDatas = showData(dataRyM);
  showDatas = filterAlien(showDatas);
  positionStart = -15;
  positionEnd = 0;
  rigth();
};
btnAlien.addEventListener("click", filtersAliens);

//función muestra los personajes principales
let showMainCharacteres = () => {
  boxCurious.style.display = "none";
  pageStart.style.display = "none";
  pageCharacteres.style.display = "block";
  screen1.style.display = "none";
  screen2.style.display = "visible";
  btnRigth.style.display = "none";
  btnLeft.style.display = "none";
  screen2.innerHTML = "";
  acum = "";
  for (let i = 0; i < 5; i++) {
    addDiv = `
                    <div id=${"divMain" + i} class=${"card"}>
                    <div id=front class=face>
                    <img src=${showDatas[i].image} id=${"imgMain" + i}>
                    <span id=${"nameMain" + i}>${showDatas[i].name}</span>
                    </div>
                    <div id=back class=face>
                    <span id=${"nameMain" + i}>Nombre: ${
      showDatas[i].name
    } <br> 
                    Especie: ${showDatas[i].species} <br> Estatus: ${
      showDatas[i].status
    } <br> 
                    Género: ${showDatas[i].gender} </span>
                    </div>
                    </div>  
                    `;
    acum += addDiv;
    screen2.innerHTML = acum;
  }
};
btnMainCharacteres.addEventListener("click", showMainCharacteres);
