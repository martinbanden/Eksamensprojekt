'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";
 

let datarr = [];

function pushCoords(getData) {
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
console.log(datarr);
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
    $("nyFejl").style.display = "none";
    $("beskrivProb").style.display = "block";
    console.log(datarr);
}

btnHvor.addEventListener("click", skift3, pushOps1);

function skift4() {
    $("beskrivProb").style.display = "none";
    $("dineOps").style.display = "block";

}

btnBeskriv.addEventListener("click", skift4, pushOps2);

function skift5() {
    $("dineOps").style.display = "none";
    $("takAfsendt").style.display = "block";

}

btnOps.addEventListener("click", skift5, pushOps3);



export {btnTilbage};
