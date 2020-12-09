'use strict'
const $ = function(foo) {

    return document.getElementById(foo);
}
function initMap() {
$('map').src = "https://open.mapquestapi.com/staticmap/v5/map?locations=Tønder,dk&size=600,400@2x&key=3ZDz50uvowZWQbX1k3NprLeq47XcdtCl"


/*http://maps.google.com/staticmap?center=tonder,dk&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7c54.931535,8.864084?key=AIzaSyDMaWoPntPbFyITyMKXcEXuIMKi9JUasbg*/
}

function getLocation() {
  let coords = $("coords");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    coords.innerHTML = "Geolocation is not supported by this browser.";
  }
 }
 
  function showPosition(position) {
  coords.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
  }

getLocation();
