//set map
var map = L.map('map').setView([39.0407056,-76.8590506], 9);

var osmGeocoder = new L.Control.OSMGeocoder();

map.addControl(osmGeocoder);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//Drop point and get coordinates handler
function onMapClick(event) {

    lat = event.latlng.lat;
    lng = event.latlng.lng;

    var coords = lng + ',' + lat;

    // Every time when user click on map we want to delete previous marker and create new marker on the new position where the user clicked
    if (typeof newMarker != 'undefined') {
        map.removeLayer(newMarker);  // delete previous marker
        newMarker = L.marker([lat, lng]).addTo(map);  // add new marker
        bootbox.confirm("<h4>Create Ride Event?</h4>", function(result){
            if (result === true) {
                modalCreateRide(coords); //function located in createRide.js
                return false;
            }
        });
    }
    else {
        newMarker = L.marker([lat, lng]).addTo(map);  // add new marker
        bootbox.confirm("<h4>Create Ride Event?</h4>", function(result){
            if (result === true) {
                modalCreateRide(coords);//function located in createRide.js
                return false;
            }
        });
    }
}


function loadGeoJSON() {
    //call stored geoJSON in DB
    $.ajax({
        dataType: "json",
        url: "http://127.0.0.1:8000/bike/data.geojson/",
        success: function (data) {
            $(data.features).each(function (key, data) {
                L.geoJson(data, {onEachFeature: onEachFeature}).addTo(map);
            });
        }
    }).error(function () {
    });
}

//close modal window when clicked Off
$(document).on('click', '.modal-backdrop', function(event){
    var classname = event.target.className;
    if (classname && !$('.' + classname).parents('.modal-dialog').length)
        bootbox.hideAll();
});

// when user click the map, it drops a marker and gets (x,y) coordinates
map.on('click', onMapClick);
$(document).ready(function () {
    loadGeoJSON();
});
