'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";

let btnTilbage = $("btnTilbage");

const init = function () {

    $("startBox").style.display = "block";

    $("oversigt").style.display = "none";

    $("nyFejl").style.display = "none"; //Vi bruger none til at fjerne de inaktive div'er

    $("beskrivProb").style.display = "none";
    
    $("dineOps").style.display = "none";

    $("Lokate").style.display = "none";

    $("takAfsendt").style.display = "none";
}

window.addEventListener('load', init); 

