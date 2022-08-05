import { showData, showOrder, filterHuman, filterAlien} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let dataRyM = data;
let showDatas = showData(dataRyM);
let btnInit = document.getElementById("init");
let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showDatas.length;
console.log(sizeData);
// let divideData = Math.round(sizeData / 33);
// console.log(divideData);
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
        positionStart +=15;
        positionEnd += 15;
        pageStart.style.display = "none";
        pageCharacteres.style.display = "block";
        screen1.style.display = "visible";
        screen1.innerHTML = "";
        if(positionStart >= 15){
            btnLeft.style.display = "block";
        }
        acum = "";
        console.log(positionStart, positionEnd);
        for (let i = positionStart; i < positionEnd; i++) {
            if (i >= sizeData) {
                btnRigth.style.display = "none";
                return;
            }  else {
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
    const left= () => {
        console.log("posición inicial"+positionStart, "posición final"+positionEnd)
        positionStart -= 15;
        positionEnd -= 15;
        pageStart.style.display = "none";
        pageCharacteres.style.display = "block";
        screen1.style.display = "visible";
        btnRigth.style.display ="block";
        if(positionStart < 0 ){
        positionStart = 0;
        positionEnd = 15;
        btnLeft.style.display = "none";
        return;
        } else if(positionStart >= 15){
            btnLeft.style.display = "block";
        }
        screen1.innerHTML = "";
        acum = "";
        for(let i = positionStart; i < positionEnd; i++ ){
            addDiv = `
            <div id=${"div" + i} className=${"character"}>
            <img src=${showDatas[i].image} id=${"img" + i}>
             <span id=${"name" + i}>${showDatas[i].name}</span>
             </div>
            `
            acum+=addDiv;
            screen1.innerHTML = acum;
        }
    }
    btnLeft.addEventListener("click", left);

//función para volver a la página de inicio
        const home = () =>{
            pageCharacteres.style.display = "none";
            pageStart.style.display = "grid";
            positionStart = -15;
            positionEnd = 0;
            showDatas = showData(dataRyM);
        }
btnInit.addEventListener("click", home);

// función para el botón ordenar de la A-Z
const selectOrder = () =>{
 showDatas = showData(dataRyM);
 let orderImageAndName = showOrder(showDatas);
 console.log(orderImageAndName);
 positionStart = -15;
 positionEnd = 0;
 rigth();

}
btnOrderAZ.addEventListener("click", selectOrder);

// función para el botón ordenar de la A-Z
const orderReverse = () => {
 showDatas = showData(dataRyM);
 let orderImageAndName = showOrder(showDatas);
 orderImageAndName.reverse();
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
    console.log(showDatas);
    sizeData = showDatas.length;
       positionStart = -15;
       positionEnd = 0;
       rigth();
   }  
btnAlien.addEventListener("click", filtersAliens);