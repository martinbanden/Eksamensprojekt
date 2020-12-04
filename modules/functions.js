'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";



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
}

btnHvor.addEventListener("click", skift3);

function skift4() {
    $("beskrivProb").style.display = "none";
    $("dineOps").style.display = "block";
}

btnBeskriv.addEventListener("click", skift4);

function skift5() {
    $("dineOps").style.display = "none";
    $("takAfsendt").style.display = "block";
}

btnOps.addEventListener("click", skift5);



export {btnTilbage};
