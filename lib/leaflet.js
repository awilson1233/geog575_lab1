/* Example from Leaflet Quick Start Guide*/

var map = L.map('map').setView([8.465677, -13.231722], 13);

//add tile layer...replace project id and accessToken with your own
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery   <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'username.ab12cdef',
    accessToken: 'ab.cdE1Fghijk2lmNopQR3stUv4WX5YZabcDEF6GhiJK7L8M9NopQ.rsTuVWxyZABCDEFghiJKlm'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

//function to retrieve the data and place it on the map
function getData(map){
    //load the data
    $.ajax("C:\wamp64\www\Geog575Lab1\data\geoJSON\guinea_admin2.geojson", {
        dataType: "json",
        success: function(response){

            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(response).addTo(map);
        }
    });
};

$(document).ready(createMap);

