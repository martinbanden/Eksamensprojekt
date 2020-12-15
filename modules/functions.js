'use strict'
import {$, createCookie, readCookie, eraseCookie} from "http://localhost/webdev/projects/1. semester eksamen/modules/library.js";
 




let datarr = [];    
let osarr = [];

/*if (fejlmelding > 0 ) {
readCookie(fejlmelding);
let obj = JSON.parse(fejlmelding);
osarr = obj;
}     
*/

let lat;
let lng;
let date;
let coords = $("kotekst");

let map = $('map');

let realwidth = map.clientWidth;
let realheight = map.clientWidth;
let json_str;

function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap);
  } else {
    coords.innerHTML = "Geolocation is not supported by this browser.";
  }
 }

getLocation();

function initMap(position) {

  lat = position.coords.latitude;
  lng = position.coords.longitude;
  let domTimestamp = position.timestamp;
  date = new Date(domTimestamp);

let map = $("map");
let staticmap = document.createElement("IMG");
staticmap.src = "https://www.mapquestapi.com/staticmap/v5/map?key=3ZDz50uvowZWQbX1k3NprLeq47XcdtCl&locations="+ lat +","+ lng +"&center="+ lat +","+ lng +"&size="+ realwidth +","+ realheight +"&zoom=18&type=map&@2x";
map.appendChild(staticmap);
}

function sendCoords() {

let coordSet = `${lat} , ${lng}`; /*koordinaterne bliver sendt videre som en string*/
coords.value = coordSet;            
datarr.push(coordSet);
datarr.push(date);             
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
datarr.push(text);
console.log(datarr);
}

function pushOps3() {
    let navn = $("navn").value;
    let tlf = $("tlf").value;
datarr.push(navn);
datarr.push(tlf);
osarr.push(datarr);
json_str = JSON.stringify(osarr);
console.log(datarr);
datarr = [];
}

    let n1 = $("n1");
    let n2 = $("n2");
    let n3 = $("n3");
    let niveau = 0;

    let input1 = $("n1s");
    let input2 = $("n2s");
    let input3 = $("n3s");

    let nname = document.createAttribute("name");
    nname.value = "n1";


function mkritisk() {
    n1.style.opacity = "1.0";
    n2.style.opacity = ".5";
    n3.style.opacity = ".5";

    if (niveau === 2) {
    input2.removeAttributeNode(nname);
    } else if ( niveau === 3) {
    input3.removeAttributeNode(nname); 
    }  

    niveau = 1;
    input1.setAttributeNode(nname);

    
}

n1.addEventListener("click", mkritisk);


function kritisk() {
    n2.style.opacity = "1.0";
    n3.style.opacity = ".5";
    n1.style.opacity = ".5";
    
    if (niveau === 1) {
    input1.removeAttributeNode(nname);
    } else if ( niveau === 3) {
    input3.removeAttributeNode(nname); 
    }  

    niveau = 2;
    input2.setAttributeNode(nname);
 
    

}

n2.addEventListener("click", kritisk);


function lkritisk() {
    n3.style.opacity = "1.0";
    n1.style.opacity = ".5"; 
    n2.style.opacity = ".5";

    if (niveau === 1) {
    input1.removeAttributeNode(nname);
    } else if ( niveau === 2) {
    input2.removeAttributeNode(nname); 
    }  
    niveau = 3;
    input3.setAttributeNode(nname);

    
}

n3.addEventListener("click", lkritisk);


function oversigt() {
let oversigt = $("oversigt");
let div = document.createElement("div");
let ndiv = document.createElement("div");             
let p = document.createElement("p");

div.innerHTML = "";                                 /*for løkken udskriver alt hvad der er i array så for at undgå
                                                    dobbelt udskrivning nulstiller vi div'et*/

for (let i = 0; i < osarr.length; i++) {
    let flatArr = osarr[i];

          
    div.setAttribute("id", "os" + i);               /*vi sætter et id som bruger i variablen fra løkken så
                                                    at der er specifikt for hvert div*/                         
    let att = document.createAttribute("class");    /* Laver en ny attribute*/
    
    div.appendChild(ndiv); 
    ndiv.style.borderRadius = "200px"; 
    ndiv.style.width = "60px";
    ndiv.style.height = "60px";
    ndiv.style.display = "block";
    ndiv.style.float = "left";



    div.appendChild(p);
    p.innerHTML = flatArr[2] + "<br>" + flatArr[3] + "<br>" + flatArr[4]; /*udskriver fra array*/ 
    p.style.width = "auto";                        /*styling på p*/
    p.style.display = "flex";
    p.style.textAlign = "left";
    p.style.lineHeight = "25px";
    p.style.fontSize = "15px";
    p.style.paddingLeft ="20px"

    att.value = "fejl";                             /*class bliver navngivet "fejl"*/
    div.setAttributeNode(att);
                  
    div.style.backgroundColor = "white";  /* styling på de diver der kommer */
    div.style.borderRadius = "200px";
    div.style.padding = "15px 20px";
    div.style.marginTop = "30px";
    div.style.marginLeft = "10px";
    div.style.marginRight = "10px";
    div.style.boxShadow = "0 10px 6px 0 rgba(0, 0, 0, 0.664)";
                                                  /*div får tilskrevet class="fejl"*/


    
    oversigt.appendChild(div);                      /*div bliver sat som child element af div med id'et oversigt*/


        if (flatArr[5] === 1) {
            ndiv.style.backgroundColor ="#ff2d2d";
            
        } else if (flatArr[5] === 2){
            ndiv.style.backgroundColor = "#FFE135";
        } else {
            ndiv.style.backgroundColor ="#25cb55";
        }

    flatArr = [];
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
    sendCoords();
}

btnMaps.addEventListener("click", skift2);

function skift3() {                   // her skal laves validering af formular
    /*sendCoords();*/
    let emptko = $("kotekst").value;
    if (emptko === "") {
        alert("Du mangler at udfylde dine koordinater");
        return false;
    } else {
        pushOps1();
        $("nyFejl").style.display = "none";
        $("beskrivProb").style.display = "block";
        return true;
    }
}

btnHvor.addEventListener("click", skift3);

function skift4() {
    let empttekst = $("tekst").value;
    if (empttekst === "") {
        alert("Du mangler at beskrive problemet");
        return false;
    } else {
        datarr.push(niveau);
        pushOps2();
        $("beskrivProb").style.display = "none";
        $("dineOps").style.display = "block";
        return true;
    }
}

btnBeskriv.addEventListener("click", skift4);

function skift5() {
    let emptnavn = $("navn").value;
    let empttlf = $("tlf").value;
    if (emptnavn === "") {
        alert("Du mangler at udfylde dit navn");
        return false;
    } else if (empttlf === "") {
        alert("Du mangler at udfylde dit telefonnummer");
        return false;
    } else {
        
        createCookie('fejlmelding', json_str, 10000000);
        pushOps3();
        oversigt();
        $("dineOps").style.display = "none";
        $("takAfsendt").style.display = "block";
        console.log(datarr);
        console.log(osarr);
        return true;
    }
}

btnOps.addEventListener("click", skift5);

function tilbage() {
$("startBox").style.display = "block";
$("oversigt").style.display = "block";
$("takAfsendt").style.display = "none";
}

btnTilbage.addEventListener("click", tilbage);

//Cookies