'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";
import {} from "http://localhost/webdev/projects/1. semester eksamen/modules/formMail.js";
/*http://localhost/webdev/projects/1. semester eksamen angiv stien på jeres egen localhost for at afprøve*/


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

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

export {btnTilbage};
