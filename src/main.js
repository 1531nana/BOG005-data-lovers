import { showData, showOrder, filterHuman, filterAlien, showRandom, main_characteres} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let dataRyM = data;
// console.log(dataRyM);
let showDatas = showData(dataRyM);
// console.log(showDatas);

// variables del DOM
let btnInit = document.getElementById("init");
let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showDatas.length;
let btnCurious = document.getElementById("curious_fact");
// let showGenders = showGender(showDatas);
let boxCurious = document.getElementById("caja_curious");
// let showStatus1 = showStatus(showDatas);
let btnHuman = document.getElementById("human");
let btnAlien = document.getElementById("alien");
let btnMainCharacteres = document.getElementById("main_characteres");
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
console.log(showRandom1);
// let characteresClass = document.getElementsByClassName("character");
// let mainCharacteres = main_characteres(showDatas);
// console.log(mainCharacteres);

//Incializar estilos
pageStart.style.display = "visible";
pageCharacteres.style.display = "none";
btnLeft.style.display = "none";
boxCurious.style.display = "none";

//arreglo, que almacena los mensajes aleatorios para el usuario
let datosRan = 
[" En la serie hay " + showRandom1.male + " personajes masculinos.",
 " En la serie hay " + showRandom1.female + " personajes femeninos.", 
" En la serie hay " + showRandom1.genderUndefined + " personajes de género indefinido.", 
" En la serie hay " + showRandom1.alive + " personajes vivos.", 
" En la serie hay " + showRandom1.dead + " personajes muertos.",
" En la serie hay " + showRandom1.statusUndefined + " personajes de estatus indefinidos"]

//función que muestra en una textarea el mensaje aleatorio
const datesRandom = () => {
    pageStart.style.display = "none";
    screen1.style.display = "none";
    btnRigth.style.display = "none";
    boxCurious.style.display= "block";
    let aleatorie = datosRan[Math.floor(Math.random() * datosRan.length)]
    boxCurious.textContent = aleatorie;
    return aleatorie;
}
btnCurious.addEventListener("click", datesRandom)

    // funcion para la flecha derecha
    const rigth = () => {
        boxCurious.style.display = "none";
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
        positionStart -= 15;
        positionEnd -= 15;
        pageStart.style.display = "none";
        pageCharacteres.style.display = "block";
        screen1.style.display = "grid";
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
            boxCurious.style.display= "none";
            positionStart = -15;
            positionEnd = 0;
            showDatas = showData(dataRyM);
        }
btnInit.addEventListener("click", home);

// función para el botón ordenar de la A-Z
const selectOrder = () =>{
     screen1.style.display = "grid";
    btnRigth.style.display = "block";
    sizeData = showDatas.length;
    showDatas = showData(dataRyM);
    let orderImageAndName = showOrder(showDatas);
    console.log(orderImageAndName.length);
    positionStart = -15;
    positionEnd = 0;
    rigth();

}
btnOrderAZ.addEventListener("click", selectOrder);

// función para el botón ordenar de la Z-A
const orderReverse = () => {
    screen1.style.display = "grid";
    btnRigth.style.display = "block";
    sizeData = showDatas.length;
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
    screen1.style.display = "grid";
    btnRigth.style.display = "block";
    sizeData = showDatas.length;
    showDatas = showData(dataRyM);
     showDatas = filterHuman(showDatas);
        positionStart = -15;
        positionEnd = 0;
        rigth();
    }    
btnHuman.addEventListener("click", filtersHuman)

//función para filtrar por especies aliens
const filtersAliens = () => {
    screen1.style.display = "grid";
    btnRigth.style.display = "block";
    sizeData = showDatas.length;
    showDatas = showData(dataRyM);
    showDatas = filterAlien(showDatas);
    console.log(showDatas);
       positionStart = -15;
       positionEnd = 0;
       rigth();
   }  
btnAlien.addEventListener("click", filtersAliens);

//función para mostrar personajes principales
// let imag = document.getElementsByTagName("img");
const showFeatures = () =>{
    screen1.style.display = "grid";
    btnRigth.style.display = "block";
    showDatas = showData(dataRyM);
    let  mainCharacteres = main_characteres(showDatas);
    console.log(mainCharacteres)
    sizeData = mainCharacteres.length;
    positionStart = -15;
    positionEnd = 0;
    // document.getElementById("main_characteres").style.color = "green";
    // screen1.style.borderRadius = "1em";
    // screen1.style.border = "1px solid salmon"
    rigth();
    // let imgRick = document.getElementById("img0");
    // let divRick = document.getElementById("div0");

    // imgRick.style.cssText = "border-radius: 0px; border: 1px solid salmon; overflow: hidden; color: yellow; position: relative";
    // let description = document.getElementById("description");
    // let imgMorty = document.getElementById("img1").style.borderRadius = "0px";
    // let imgSummer = document.getElementById("img2").style.borderRadius = "0px";
    // let imgBeth = document.getElementById("img3").style.borderRadius = "0px";
    // let imgJerry = document.getElementById("img4").style.borderRadius = "0px";
    // let acu = "";
    // let content ;

    // let ciclo = mainCharacteres.map(element => element);
    // let ob = Object.values(ciclo);
    // console.log(ob[0].name);
    // divRick.textContent = "hola";
    // console.log("espero " +ciclo[0].name);

    // for(let i = 0; i < mainCharacteres.length; i++){
    //     let obje = Object.values(mainCharacteres);
    //     content = [obje[i]];
    //     console.log(content)
    //     // mainCharacteres.textContent = [mainCharacteres[i]];
    //     // acu += content;
    //     // imgRick.style.cssText = "overflow: hidden; color: yellow";
    //     // console.log(acu);
    //     return content;
    // }
    // console.log(imgRick.textContent = content[0]);
    // console.log(content)

}
btnMainCharacteres.addEventListener("click", showFeatures);