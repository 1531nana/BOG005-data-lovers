import { showData, showOrder, filterHuman, filterAlien, dataCurious } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let dataRyM = data;
let showDatas = showData(dataRyM);
// console.log("imprimir data", showDatas);

let btnInit = document.getElementById("init");
let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showDatas.length;


// variables del DOM
let btnHuman = document.getElementById("human");
let btnAlien = document.getElementById("alien");
// let btnMainCharacteres = document.getElementById("main_characteres");
let btnOrderAZ = document.getElementById("order_a_z");
let pageStart = document.getElementById("page_start");
let pageCharacteres = document.getElementById("page_characteres");
let btnCharacteres = document.getElementById("button_characteres");
let btnRigth = document.getElementById("rigth");
let btnLeft = document.getElementById("left");
let btnOrderZA = document.getElementById("order_z_a");
let positionStart = -15;
let positionEnd = 0;
pageStart.style.display = "visible";
pageCharacteres.style.display = "none";
btnLeft.style.display = "none";

// funcion para la flecha derecha

const rigth = () => {
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
                    <div id=${"div" + i} className=${"character"}>
                    <img src=${showDatas[i].image} id=${"img" + i}>
                    <span id=${"name" + i}>${showDatas[i].name}</span>
                    </div>
                    `
            acum += addDiv;
            screen1.innerHTML = acum;
        }

    }
}
btnCharacteres.addEventListener("click", rigth);
btnRigth.addEventListener("click", rigth);

// funcion para la flecha izquierda
const left = () => {
    positionStart -= 15;
    positionEnd -= 15;
    pageStart.style.display = "none";
    pageCharacteres.style.display = "block";
    screen1.style.display = "visible";
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
            <div id=${"div" + i} className=${"character"}>
            <img src=${showDatas[i].image} id=${"img" + i}>
             <span id=${"name" + i}>${showDatas[i].name}</span>
             </div>
            `
        acum += addDiv;
        screen1.innerHTML = acum;
    }
}
btnLeft.addEventListener("click", left);

//función para volver a la página de inicio
const home = () => {
    pageCharacteres.style.display = "none";
    pageStart.style.display = "grid";
    positionStart = -15;
    positionEnd = 0;
    showDatas = showData(dataRyM);
}
btnInit.addEventListener("click", home);

// función para el botón ordenar de la A-Z
const selectOrder = () => {
    showDatas = showData(dataRyM);
    showDatas = showOrder(showDatas);
    positionStart = -15;
    positionEnd = 0;
    rigth();

}
btnOrderAZ.addEventListener("click", selectOrder);

// función para el botón ordenar de la A-Z
const orderReverse = () => {
    showDatas = showData(dataRyM);
    showDatas = showOrder(showDatas);
    showDatas.reverse();
    positionStart = -15;
    positionEnd = 0;
    rigth();
}
btnOrderZA.addEventListener("click", orderReverse);

//función para filtrar por especies humanas
const filtersHuman = () => {
    showDatas = showData(dataRyM);
    showDatas = filterHuman(showDatas);
    sizeData = showDatas.length;
    positionStart = -15;
    positionEnd = 0;
    rigth();
}
btnHuman.addEventListener("click", filtersHuman)

//función para filtrar por especies aliens
const filtersAliens = () => {
    showDatas = showData(dataRyM);
    showDatas = filterAlien(showDatas);
    sizeData = showDatas.length;
    positionStart = -15;
    positionEnd = 0;
    rigth();
}
btnAlien.addEventListener("click", filtersAliens);

//funcion para imprimir datos 
const showDatasCurious =() =>{
    showDatas =showData(dataRyM);
    btnRigth.style.display = "none";
    btnLeft.style.display = "none";
    screen1.innerHTML = "";
    acum = "";
    // document.getElementById("portal").style.display="block"
    let dataRandom = dataCurious(showDatas);
    //elige aleatorio el dato
    let dataPrint = dataRandom[Math.floor(Math.random()*dataRandom.length)];
    console.log("datos 0 o 1", dataPrint)
    //elige aleatorio la llave
    let keyObject =Object.keys(dataPrint);
    keyObject = keyObject[Math.floor(Math.random()*keyObject.length)];
    console.log("llave", keyObject)
    //imprime el valor de la llave
    let keyObjectValue = dataPrint[`${keyObject}`]
    console.log("valor llave", keyObjectValue)
    //imprimir en pantalla
    acum= ` <div id=portaldatos>
    <label id="printCuriousFact">Hay ${keyObjectValue} personajes ${keyObject} en Rick and Morty </label>
    </div>`
    screen1.innerHTML = acum;
}
document.getElementById("curious_fact").addEventListener("click", showDatasCurious)

// console.log("data gender, data status", dataCurious(showDatas))
