    var convertNames = {
        "description":"Details",
        "locationAddress":"Address",
        "Ridetime":"Time",
        "postRideBeer":"Post-Ride Food & Beer Spot",
        "cost":"Cost",
        "website":"Website",
        "hostedBy":"Hosted By",
        "rideTypeMTB":"MTB Discipline",
        "rideLevelTrail":"Skill Level",
        "rideLevelRoad":"Road Pace",
        "roadOrDirt":"Road Or Trail",
        "rideType":"Event Type",
        "name":"Name",
        "coordinates":"Coordinates",
        "riders":"Member Riders",
        "non_member_riders":"Non Member Riders",
        "race_trail":"Mountain Bike Race",
        "group_ride_road":"Group Ride - Road",
        "group_ride_trail":"Group Ride - MTB",
        "race_road":"Road Race",
        "special_event":"Special Event",
        "trail_work_day":"Trail Work Day",
        "bike_swap":"Swap Meet",
        "conference":"Conference",
        "DBL_BLACK":"Double Black Diamond",
        "BLACK":"Single Black Diamond",
        "BLUE":"Blue",
        "GREEN":"Green"
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

            popUpHtml =  '<table id="detailTable" class="table table-striped table-bordered table-condensed"><tbody><tr><th><h4>' + convertNames[rideType.toLowerCase() + "_" + rideSurface.toLowerCase()] + '</h4></th></tr>' +
                            "<tr><th>Name: </th>" + '<td>' + marker.feature.properties.name + '</td></tr>' +
                            "<tr><th>Frequency: </th>" + '<td>' + marker.feature.properties.event_Frequency + '</td></tr>';
        }
        else {
            ajaxUrl = ajax_convert_names[rideType.toLowerCase()] + "/" +
            marker.feature.id + "/";

            popUpHtml =  '<table id="detailTable" class="table table-striped table-bordered table-condensed"><tbody><tr><th><h4>' + convertNames[rideType.toLowerCase()] + '</h4></th></tr>' +
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
                            if (fld === "ridetime" ) {
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
                            else {
                                popUpHtml += '<tr><th>' + key + '</th>' + '<td>' + value + '</td></tr>';
                            }
                        }
                    }
                    //create popupHTML and bind to marker
                    popUpHtml += '</tbody></table><p><button id="joinRideButton" class="btn btn-default btn-primary">Join Ride</button></p>'
                    bootbox.dialog({
                        title: "Details",
                        message: popUpHtml,
                        animate: true
                    });
                    $("#getRiderInfoLinkMember").click({param1: "member" , param2: membersArray}, getRiders);
                    $("#getRiderInfoLinkNonMember").click({param1: "non_member" , param2: nonMembersArray}, getRiders);
                    $("#joinRideButton").click(createJoinRideForm); //Add click handler for people joining this ride
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
            data: { first_name : $('#id_first_name').val(),
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