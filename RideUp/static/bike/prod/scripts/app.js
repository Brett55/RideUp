//set map
var map = L.map('map').setView([39.0407056, -76.8590506], 9);

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
        bootbox.confirm("<h4>Create Ride Event?</h4>", function (result) {
            if (result === true) {
                modalCreateRide(coords); //function located in createRide.js
                return false;
            }
        });
    }
    else {
        newMarker = L.marker([lat, lng]).addTo(map);  // add new marker
        bootbox.confirm("<h4>Create Ride Event?</h4>", function (result) {
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
    }).error(function () {
    });
}

//Marker click handler
function onEachFeature(feature, layer) {
    // attach click handler to do AJAX call
    layer.on('click', onClick);
}

//close modal window when clicked Off
$(document).on('click', '.modal-backdrop', function (event) {
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

var convertNames = {
    "description": "Details",
    "locationAddress": "Address",
    "Ridetime": "Time",
    "postRideBeer": "Post-Ride Food & Beer Spot",
    "cost": "Cost",
    "ridetime": "Ride Time",
    "website": "Website",
    "hostedBy": "Hosted By",
    "rideTypeMTB": "MTB Discipline",
    "rideLevelTrail": "Skill Level",
    "rideLevelRoad": "Road Pace",
    "roadOrDirt": "Road Or Trail",
    "rideType": "Event Type",
    "name": "Name",
    "coordinates": "Coordinates",
    "riders": "Member Riders",
    "non_member_riders": "Non Member Riders",
    "race_trail": "Mountain Bike Race",
    "group_ride_road": "Group Ride - Road",
    "group_ride_trail": "Group Ride - MTB",
    "race_road": "Road Race",
    "special_event": "Special Event",
    "trail_work_day": "Trail Work Day",
    "bike_swap": "Swap Meet",
    "conference": "Conference",
    "DBL_BLACK": "Double Black Diamond",
    "BLACK": "Single Black Diamond",
    "BLUE": "Blue",
    "GREEN": "Green"
};

var ajax_convert_names = {
    "race_trail": "TrailRace",
    "group_ride_road": "GroupRideRoad",
    "group_ride_trail": "GroupRideDirt",
    "race_road": "RoadRace",
    "special_event": "RideSpecialEvent",
    "trail_work_day": "TrailWorkDay",
    "bike_swap": "BikeSwap",
    "conference": "Conference"
};

//Marker click handler
function onClick(e) {

    marker = this; //global var to use in othe AJAX calls
    var ajaxUrl = "";
    var popUpHtml = "";
    var rideType = marker.feature.properties.rideType;
    var rideSurface = marker.feature.properties.roadOrDirt;

    // If/else condition is used to build AJAX url and popup information
    if (rideType === "RACE" || rideType === "GROUP_RIDE") {

        ajaxUrl = ajax_convert_names[rideType.toLowerCase() + "_" +
        rideSurface.toLowerCase()] + "/" +
        marker.feature.id + "/";

        popUpHtml = '<table id="detailTable" class="table table-striped table-bordered table-condensed"><tbody><tr><th><h4>' + convertNames[rideType.toLowerCase() + "_" + rideSurface.toLowerCase()] + '</h4></th></tr>' +
        "<tr><th>Name: </th>" + '<td>' + marker.feature.properties.name + '</td></tr>' +
        "<tr><th>Frequency: </th>" + '<td>' + marker.feature.properties.event_Frequency + '</td></tr>';
    }
    else {
        ajaxUrl = ajax_convert_names[rideType.toLowerCase()] + "/" +
        marker.feature.id + "/";

        popUpHtml = '<table id="detailTable" class="table table-striped table-bordered table-condensed"><tbody><tr><th><h4>' + convertNames[rideType.toLowerCase()] + '</h4></th></tr>' +
        "<tr><th>Name: </th><td>" + marker.feature.properties.name + '</td></tr>' +
        "<tr><th>Frequency: </th>" + '<td>' + marker.feature.properties.event_Frequency + '</td></tr>';
    }
    //Calling ajaxURL to populate marker popup
    $.ajax({
        dataType: "json",
        url: ajaxUrl,
        success: function (data) {
            $(data).each(function (key, data) {
                for (var fld in data.fields) {
                    var key = convertNames[fld]; //popup key
                    var value = data.fields[fld]; //popup value
                    if ((key) && (value)) {
                        if (fld === "ridetime") {
                            var time = new Date(data.fields[fld]); //convert time to readable format
                            value = time.toLocaleString(navigator.language, {
                                //Options for time display
                                hour: '2-digit',
                                minute: '2-digit',
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit'
                            });
                        }
                        //sorting between members and non members for AJAX call
                        if (fld === "non_member_riders") {
                            var nonMembersArray = value;
                            var td = '<a id="getRiderInfoLinkNonMember" href="javascript:void(0)">' + value.length + ' - Show Riders' + '</a>';
                            popUpHtml += '<tr><th>' + key + '</th>' + '<td>' + td + '</td></tr>';

                        }
                        //sorting between members and non members for AJAX call
                        else if (fld === "riders") {
                            var membersArray = value;
                            var td = '<a id="getRiderInfoLinkMember" href="javascript:void(0)">' + value.length + ' - Show Riders' + '</a>';
                            popUpHtml += '<tr><th>' + key + '</th>' + '<td>' + td + '</td></tr>';
                        }
                        else if ((fld === "rideLevelTrail") || (fld === "rideLevelRoad") || (fld === "rideTypeMTB")) {
                            popUpHtml += '<tr><th>' + key + '</th>' + '<td id="' + fld + '"' + '>' + value + '</td></tr>';
                        }
                        else {
                            popUpHtml += '<tr><th>' + key + '</th>' + '<td id="' + fld + '"' + 'class="editable">' + value + '</td></tr>';
                        }
                    }
                }
                //create popupHTML and bind to marker
                popUpHtml += '</tbody></table>' +
                '<p><button id="joinRideButton" class="btn btn-primary">Join Ride</button>' +
                '<button id="editRideButton" class="btn btn-warning">Edit Ride</button>' +
                '</p>';

                bootbox.dialog({
                    title: "Details",
                    message: popUpHtml,
                    animate: true
                });
                $("#getRiderInfoLinkMember").click({param1: "member", param2: membersArray}, getRiders);
                $("#getRiderInfoLinkNonMember").click({param1: "non_member", param2: nonMembersArray}, getRiders);
                $("#joinRideButton").click(createJoinRideForm);
                $("#editRideButton").click({param1: ajaxUrl}, editJoinRideForm.change);//Add click handler for people joining this ride
            });
        }
    });
}


//Joining person to existing event
function createJoinRideForm() {
    //building form to join ride as guest or member
    $('.bootbox-body').empty().append(
        '<div class="row">' +
        '<div class="col-xs-10 col-xs-offset-1 text-left">' +
        '<form id="joinRideForm" class="form-horizontal" method="POST" role="form">' +
        '<div class="form-group">' +
        '<label>Name</label><br>' +
        '<input type="text" class="form-control" id="id_first_name" size="50">' +
        '</div>' +
        '<div class="form-group" style="display: none" id="usernameGroup">' +
        '<label>Username</label><br>' +
        '<input type="text" class="form-control" id="id_username" size="100">' +
        '</div>' +
        '<div class="form-group" style="display: none" id="passwordGroup">' +
        '<label>Password</label><br>' +
        '<input type="password" class="form-control" id="id_password" size="100">' +
        '</div>' +
        '<div class="form-group">' +
        '<button type="button" id="submitJoinRideForm" class="btn btn-primary">Submit</button>' +
        '<button type="button" id="memberJoinButton" class="btn btn-success">Become Member</button>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div>');

    $('.modal-title').html("Join Ride");

    $("#memberJoinButton").click(function () {
        $("#usernameGroup").show();
        $("#passwordGroup").show();
    });
    $("#submitJoinRideForm").click(joinRide);
}

function joinRide() {

    var ajaxUrl = "";
    var rideType = marker.feature.properties.rideType;
    var rideSurface = marker.feature.properties.roadOrDirt;

    // If/else condition is used to build AJAX url and popup information
    if (rideType === "RACE" || rideType === "GROUP_RIDE") {

        ajaxUrl = "add_rider/" + ajax_convert_names[rideType.toLowerCase() + "_" +
        rideSurface.toLowerCase()] + "/" +
        marker.feature.id + "/";
    }
    else {
        ajaxUrl = "/add_rider/" + ajax_convert_names[rideType.toLowerCase()] + "/" +
        marker.feature.id + "/";
    }
    //function to add rider to existing event
    $.ajax({
        type: "POST",
        url: ajaxUrl, //Use whichForm to set the URL for the API
        data: {
            first_name: $('#id_first_name').val(),
            username: $('#id_username').val(),
            password: $('#id_password').val()
        },
        success: function () {
            //close popup and add 'Success'
            $('.bootbox-body').empty().append(
                '<p>Success!</p>');
        },
        error: function (xhr, errmsg, err) {
            console.log("ERROR!");
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
            " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
    return false;
}
//cache previous API calls here
var cachedGetRiders = {};

//function to get all riders attached to an event and display them as a list
function getRiders(event) {

    //pass objects from event dictionary to variables
    var member_non_member = event.data.param1;
    var value = event.data.param2;

    $('.riderInfoTable').remove();
    $('#detailTable').after('<table class="riderInfoTable table table-striped table-bordered table-condensed">' +
                        '<tbody id="riderInfofromAjax"><tr><th>Riders</th></tr></tbody></table>');

    //if no riders have joined yet, display this message
    if (value.length === 0) {
        $('<tr><td>No Riders Yet...</td></tr>').appendTo('#riderInfofromAjax');
        return 0;
    }

    //this will not execute if no riders have joined yet
    $.ajax({
        dataType: "json",
        url: "riders/" + member_non_member + "/",
        type: "GET",
        // pass the ID's of the riders that joined this event already to AJAX GET request
        data: {riders: value},
        success: function (data) {
            $(data).each(function (key, data) {
                //members ajax call returned data
                if (member_non_member === "member") {
                    $('<tr><td>' + data.fields.first_name + '</td></tr>').appendTo('#riderInfofromAjax');
                }
                //non members ajax call returned data
                else {
                    $('<tr><td>' + data.fields.name + '</td></tr>').appendTo('#riderInfofromAjax');
                }
            });
        },
        error: function (xhr, errmsg, err) {
            console.log("ERROR!");
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
            " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
}
//Keep track of which form is being used to submit
var whichForm = "";


function modalCreateRide(coords) {
    $('.modal-content').empty().append(
    '<div class="modal-header">'
        +'<button class="bootbox-close-button close" aria-hidden="true" data-dismiss="modal" type="button">×</button>'
        +'<h4 class="modal-title">Create Ride</h4>'
    +'</div>'
    +'<div class="modal-body">'
        +'<div class="row">'
            +'<div class="col-xs-10 col-xs-offset-1 text-left successMsg">'
                +'<form id="post-form" class="form-horizontal" method="POST" role="form">'
                    +'<input id="id_coordinates" type="hidden" name="coordinates" maxlength="200" value="' + coords + '">'
                    +'<div class="form-group">'
                        +'<label class="control-label" for="id_name">Name of Ride</label>'
                        +'<input id="id_name" class="form-control" type="text" title="" style="height:30px" required="required" placeholder="A Local Spot" name="name" maxlength="100">'
                    +'</div>'
                    +'<div class="form-group">'
                        +'<label class="control-label" for="id_rideType">Type of Event</label>'
                        +'<select id="id_rideType" class="form-control" title="" required="required" name="rideType">'
                            +'<option selected="selected" value="BLANK">Select Type</option>'
                            +'<option value="RACE">Race</option>'
                            +'<option value="GROUP_RIDE">Group Ride</option>'
                            +'<option value="SPECIAL_EVENT">Special Event</option>'
                            +'<option value="TRAIL_WORK_DAY">Trail Work</option>'
                            +'<option value="CONFERENCE">Conference</option>'
                            +'<option value="BIKE_SWAP">Bike Swap</option>'
                        +'</select>'
                    +'</div>'
                    +'<div id="fill"></div>'
                    +'<div id="fill_last"></div>'
                +'</form>'
            +'</div>'
        +'</div>'
    +'</div>'
    );
    makeCreateRideFormLive();
}

//add more fields for dirt or road group rides or races
function detailedUpdateForm() {
    var typeSurface = $("#id_roadOrDirt").val();
    var typeEvent = $("#id_rideType").val();
    //Clear fields and call django api for respective fields
    $("#fill_last").empty();
    $.ajax({
        dataType: "html",
        url: "form/" + typeEvent.toLowerCase() + "_" + typeSurface.toLowerCase(),
        success: function (data) {
            $(data).each(function (key, data) {
                $(data).appendTo("#fill_last").hide().fadeIn(1);
                // get time from jquery time widget
                  jQuery('#id_ridetime').datetimepicker({
                    format: 'm-d-Y g:i A',
                    pick12HourFormat: true
                });
                whichForm = typeEvent.toLowerCase() + "_" + typeSurface.toLowerCase();
            });
        }
    });
}

function makeCreateRideFormLive() {
    //Add more fields for ride events, if it is a group ride or race, call detailedUpdateFORM
    $("#id_rideType").change(function updateForm() {
        var typeEvent = $("#id_rideType").val();
        if (typeEvent.toLowerCase() != "blank") {
            if (typeEvent === "RACE" || typeEvent === "GROUP_RIDE") {
                $("#fill").empty();
                $("#fill_last").empty();
                //add sub field for race or group rides, dirt or road, then attach handler (detailedUpdateForm)
                $('<div class="form-group"><label class="control-label" for="id_roadOrDirt">Trail or Road</label>' +
                '<select class="form-control" id="id_roadOrDirt" name="roadOrDirt" required="required" title="">' +
                '<option value="SURFACE">Select Surface</option>' +
                '<option value="TRAIL">Trail</option>' +
                '<option value="ROAD">Road</option></select></div>').appendTo("#fill").hide().fadeIn(1);
                $("#id_roadOrDirt").change(detailedUpdateForm);
            }
            else {
                //Clear and call django API for respective fields
                $("#fill").empty();
                $("#fill_last").empty();
                $('#fill').append('<div class="form-group"><label class="control-label" for="id_roadOrDirt">Trail or Road</label>' +
                '<select class="form-control" id="id_roadOrDirt" name="roadOrDirt" type="hidden" required="required" title="">' +
                '<option value="TRAIL" selected>NA</option>');
                $.ajax({
                    dataType: "html",
                    url: "form/" + typeEvent.toLowerCase(),
                    success: function (data) {
                        $(data).each(function (key, data) {
                            $(data).appendTo("#fill").hide().fadeIn(1);
                            // get time from jquery time widget
                            jQuery('#id_ridetime').datetimepicker({
                                format: 'm-d-Y g:i A',
                                pick12HourFormat: true
                            });
                            whichForm = typeEvent.toLowerCase();
                        });
                    }
                });
            }
        }
        else {
            //Empty form if 'select type' is selected
            $("#fill").empty();
            $("#fill_last").empty();
        }
    });


    //grab form and POST data on submission
    var frm = $('#post-form');
    frm.submit(function () {
        $.ajax({
            type: "POST",
            url: ajax_convert_names[whichForm] + "/", //Use whichForm to set the URL for the API
            data: frm.serialize(),
            success: function () {
                //Remove the values from the input
                $("#fill").empty();
                $("#fill_last").empty();
                $('#id_name').val('');
                $('#id_rideType').val("BLANK");

                //Reload geoJSON
                loadGeoJSON();
                map.removeLayer(newMarker);
                $('.successMsg').empty().append(
                        '<h3 class="logo">Success!</h3>');
            },

            error: function (xhr, errmsg, err) {
                console.log("ERROR!");
                $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
        return false;
    });
}
'use strict';

var editJoinRideForm = (function () {
    var formDataArray = [];
    var formDataForAJAX = {};
    var ajax_URL = "";

    return {
        change: function (event) {
            ajax_URL = event.data.param1;
            var editRideButton = $("#editRideButton");
            $("<a class='edit-tag' href='#'><span class='glyphicon glyphicon-edit'>&nbsp</span></a").prependTo(".editable");
            editRideButton.removeClass("btn-warning");
            editRideButton.toggleClass("btn-success");
            editRideButton.toggleClass("editSubmit");
            editRideButton.text("Save Edits");
            $(".edit-tag").click(editJoinRideForm.edit);
            $(".editSubmit").click(editJoinRideForm.submit);
        },

        submit: function () {
            editJoinRideForm.save(ajax_URL);
        },

        reset: function () {
            var editRideButton = $("#editRideButton");
            editRideButton.removeClass("btn-success");
            editRideButton.removeClass("editSubmit");
            editRideButton.toggleClass("btn-warning");
            editRideButton.text("Edit Ride");
        },

        edit: function () {
            var editId = $(this).parent().attr('id');
            var currentVal = $("#" + editId).text();
            if (editId === "ridetime") {
                $(this).parent().replaceWith('<input class="form-control" id="' + editId + '"' + 'type="text" + placeholder="'
                + currentVal + '"/>');

                jQuery('#ridetime').datetimepicker({
                    format: 'm-d-Y g:i A',
                    pick12HourFormat: true
                });
            }
            else {
                $(this).parent().replaceWith('<input class="form-control" id="' + editId + '"' + 'type="text" placeholder="'
                + currentVal + '"/>');
            }
            formDataArray.push(editId);
        },

        save: function (ajax_URL) {
            for (var item in formDataArray) {
                if (formDataArray.hasOwnProperty(item)) {
                    var key = formDataArray[item];
                    formDataForAJAX[key] = $("#" + key).val();
                }
            }

            $.ajax({
                type: "PUT",
                url: "/update_event/" + ajax_URL, //Use whichForm to set the URL for the API
                data: formDataForAJAX,
                success: function () {
                    //close popup and add 'Success'
                    $('.bootbox-body').empty().append(
                        '<p>Success!</p>');
                },
                error: function (xhr, errmsg) {
                    console.log("ERROR!");
                    $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                    " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
                    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console

                }
            });
        }
    };
}());

//Click handlers for nav bar
$('#howTo').click(function() { popUps(this.id); return false; });
$('#members').click(function() { popUps(this.id); return false; });
$('#about').click(function() { popUps(this.id); return false; });

function popUps(idName) {

    if (idName === 'howTo') {
        bootbox.alert('<p class="navText">Simply click on the map and set a marker. You will then be prompted to add an event of your ' +
        'choosing. <br><br>Not sure where things are? Just click the search tool in the upper right corner of the map');
    }
    else if (idName === 'members') {
        bootbox.alert('<p class="navText"> Becoming a member of Ride[up] is easy, and free. ' +
        'The benefits of membership include: <br>' +
        '<ul class="navText">' +
        '<li>Ability to Sell Parts at Events</li>' +
        '<li>Create New Events with 1 click</li>' +
        '<li>Communicating with other Ride[up] Members</li>'+
        '<li>Profile Pictures</li>');
    }

    else if (idName === 'about') {
        bootbox.alert('<p class="navText text center"> The concept behind Ride[up] is simple:<br><br> 1) Find local bicycle related events<br>' +
        '<br> 2) Coordinate group rides with ease</p>');
    }
}
