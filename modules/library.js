'use strict';

const $ = function(foo) {

    return document.getElementById(foo);
}

function createCookie(name, value, days) {
    let expires;
    let samesite = "; sameSite=lax";            // nml
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + samesite + "; path=/"; // nml
}

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


// Initialize and add the map
function initMap() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition();
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    const user = { lat: position.coords.latitude, lng: position.coords.longitude };
    // The map, centered at user
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: user,
    });
    // The marker, positioned at user
    const marker = new google.maps.Marker({
      position: user,
      map: map,
    });
  }



export {$, createCookie, readCookie, eraseCookie, initMap};