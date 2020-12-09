'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";
 

let datarr = [];
let osarr = [];

function pushCoords() {
let coords = $("coords").value;
datarr.push(coords);
}

function pushOps1() {
    let area = $("area").value;
    let cat = $("cat").value;
    let error = $("error").value;
datarr.push(area);
datarr.push(cat);
datarr.push(error);
console.log(datarr);
}

function pushOps2() {
let text = $("tekst").value;
    let n1 = $("n1").value;
    let n2 = $("n2").value;
    let n3 = $("n3").value;
datarr.push(text);
datarr.push(n1);
datarr.push(n2);
datarr.push(n3);
console.log(datarr);
}

function pushOps3() {
    let navn = $("navn").value;
    let tlf = $("tlf").value;
datarr.push(navn);
datarr.push(tlf);
osarr.push(datarr);
console.log(datarr);
datarr = [];
}



function oversigt() {
let oversigt = $("oversigt");
let div = document.createElement("div");            /*vi laver et nyt div*/
div.innerHTML = "";                                 /*for løkken udskriver alt hvad der er i array så for at undgå
                                                    dobbelt udskrivning nulstiller vi div'et*/

for (let i = 0; i < osarr.length; i++) {
    div.innerHTML = osarr[i];                       /*udskriver fra array*/
    div.setAttribute("id", "os" + i);               /*vi sætter et id som bruger i variablen fra løkken så
                                                    at der er specifikt for hvert div*/

    let att = document.createAttribute("class");    /* Laver en ny attribute*/
    att.value = "fejl";                             /*class bliver navngivet "fejl"*/
    div.setAttributeNode(att);                      /*div får tilskrevet class="fejl"*/

    oversigt.appendChild(div);                      /*div bliver sat som child element af div med id'et oversigt*/

    }

}

//----------Start fejlmeldinger
let btnStart = $("btnStart");
let btnMaps = $("btnMaps");
let btnHvor = $("btnHvor");
let btnBeskriv = $("btnBeskriv");
let btnOps = $("btnOps");
let btnTilbage = $("btnTilbage");

function skift1() {
    $("startBox").style.display = "none";
    $("Lokate").style.display = "block";
    
}

btnStart.addEventListener("click", skift1);

function skift2() {
    $("Lokate").style.display = "none";
    $("nyFejl").style.display = "block";

}

btnMaps.addEventListener("click", skift2);

function skift3() {
    pushOps1();
    $("nyFejl").style.display = "none";
    $("beskrivProb").style.display = "block";

}

btnHvor.addEventListener("click", skift3);

function skift4() {
    pushOps2();
    $("beskrivProb").style.display = "none";
    $("dineOps").style.display = "block";

}

btnBeskriv.addEventListener("click", skift4);

function skift5() {
    pushOps3();
    oversigt();
    $("dineOps").style.display = "none";
    $("takAfsendt").style.display = "block";
    console.log(datarr);
    console.log(osarr);
}

btnOps.addEventListener("click", skift5);



export {btnTilbage};
