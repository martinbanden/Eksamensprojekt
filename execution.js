'use strict'
import {$, createCookie, readCookie, eraseCookie, initMap} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";

const init = function () {

    $("nyFejl").style.display = "none"; //Vi bruger none til at fjerne de inaktive div'er

    $("beskrivProb").style.display = "none";
    
    $("dineOps").style.display = "none";

    $("Lokate").style.display = "none";

    $("takAfsendt").style.display = "none";
}

window.addEventListener('load', init); 

btnTilbage.addEventListener("click", init);
