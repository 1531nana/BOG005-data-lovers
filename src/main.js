import {showImage, showName} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let dataRyM = data;
let showImages = showImage(dataRyM);
let showNames = showName(dataRyM);
// let nameSort = showNameAndImageSort(dataRyM);
// console.log(nameSort);
// let orden = showNames.sort();
// console.log(orden);
// let desorden = showNames.reverse();
// console.log(desorden);


let acum = "";
let addDiv;
let screen1 = document.getElementById("screen1");
let sizeData = showImages.length;
console.log(sizeData);
let divideData = Math.round(sizeData / 33);
console.log(divideData);
let pageStart = document.getElementById("page_start");
let pageCharacteres = document.getElementById("page_characteres");
let btnCharacteres = document.getElementById("button_characteres");
let btnRigth = document.getElementById("rigth");
let btnLeft = document.getElementById("left");
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
            } else {
                addDiv = `
                <div id=${"div" + i} className=${"character"}>
                <img src=${showImages[i]} id=${"img" + i}>
                <span id=${"name" + i}>${showNames[i]}</span>
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
            <img src=${showImages[i]} id=${"img" + i}>
            <span id=${"name" + i}>${showNames[i]}</span>
            </div>
            `
            acum+=addDiv;
            screen1.innerHTML = acum;
        }
    }
    btnLeft.addEventListener("click", left);
