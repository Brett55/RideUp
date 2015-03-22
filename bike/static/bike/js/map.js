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

var trailWorkDay = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'darkred'
});

var trailRace = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'green'
});

var roadRace = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'red'
});

var specialEvent = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'orange'
});

var bikeSwap = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'darkgreen'
});

var groupRideRoad = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'purple'
});

var groupRideTrail = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'blue'
});

var conference = L.AwesomeMarkers.icon({
    prefix: 'fa',
    icon: 'bicycle',
    markerColor: 'darkpurple'
});

var default_icon = L.AwesomeMarkers.icon({
    icon: 'home',
    markerColor: 'cadetblue'
});

function loadGeoJSON() {
    //call stored geoJSON in DB
    $.ajax({
        dataType: "json",
        url: "data.geojson/",
        success: function (data) {
            $(data.features).each(function (key, data) {
                L.geoJson(data, {
                    pointToLayer: function (feature, latlng) {
                        if (feature.properties.rideType === "CONFERENCE") {
                            return L.marker(latlng, {"icon": conference});
                        }
                        else if ((feature.properties.rideType === "GROUP_RIDE" ) && (feature.properties.roadOrDirt === "TRAIL" )) {
                            return L.marker(latlng, {"icon": groupRideTrail});
                        }
                        else if ((feature.properties.rideType === "GROUP_RIDE") && (feature.properties.roadOrDirt === "ROAD" )) {
                            return L.marker(latlng, {"icon": groupRideRoad});
                        }
                        else if ((feature.properties.rideType === "RACE") && (feature.properties.roadOrDirt === "TRAIL" )) {
                            return L.marker(latlng, {"icon": trailRace});
                        }
                        else if ((feature.properties.rideType === "RACE") && (feature.properties.roadOrDirt === "ROAD" )) {
                            return L.marker(latlng, {"icon": roadRace});
                        }
                        else if (feature.properties.rideType === "BIKE_SWAP") {
                            return L.marker(latlng, {"icon": bikeSwap});
                        }
                        else if (feature.properties.rideType === "TRAIL_WORK_DAY") {
                            return L.marker(latlng, {"icon": trailWorkDay});
                        }
                        else if (feature.properties.rideType === "SPECIAL_EVENT") {
                            return L.marker(latlng, {"icon": specialEvent});
                        }
                        else {
                            return L.marker(latlng, {"icon": default_icon});
                        }
                    },
                    onEachFeature: onEachFeature
                }).addTo(map);
            });
        }
    }).error(function () {});
}

//Marker click handler
function onEachFeature(feature, layer) {
    // attach click handler to do AJAX call
    layer.on('click', onClick);
}

//close modal window when clicked Off
$(document).on('click', '.modal-backdrop', function(event){
    var classname = event.target.className;
    if (classname && !$('.' + classname).parents('.modal-dialog').length)
        bootbox.hideAll();
        editJoinRideForm.reset();
});

// when user click the map, it drops a marker and gets (x,y) coordinates
map.on('click', onMapClick);
$(document).ready(function () {
    loadGeoJSON();
    bootbox.alert('<p class="navText text-center">Welcome to <b> Ride[up] !</b><br><br> Left Click the Map Below to Create a Group Ride<br><br>' +
    'or <br><br> Simply Click Existing Events to View Details</p>');
});
