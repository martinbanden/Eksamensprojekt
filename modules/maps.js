'use strict'
const $ = function(foo) {

    return document.getElementById(foo);
}
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

function getLocation() {
  let coords = $("coords");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    coords.innerHTML = "Geolocation is not supported by this browser.";
  }
  function showPosition(position) {
  coords.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  }
}

getLocation();
