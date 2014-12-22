//Keep track of which form is being used to submit
var whichForm = "";

//add more fields for dirt or road group rides or races
function detailedUpdateForm() {
    var typeSurface = $("#id_roadOrDirt").val();
    var typeEvent = $("#id_rideType").val();
    //Clear fields and call django api for respective fields
    $("#fill_last").empty();
    $.ajax({
        dataType: "html",
        url: "http://127.0.0.1:8000/bike/form/" + typeEvent.toLowerCase() + "_" + typeSurface.toLowerCase(),
        success: function (data) {
            $(data).each(function (key, data) {
                $(data).appendTo("#fill_last").hide().fadeIn(1250);
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
            '<option value="ROAD">Road</option></select></div>').appendTo("#fill").hide().fadeIn(1250);
            $("#id_roadOrDirt").change(detailedUpdateForm);
        }
        else {
            //Clear and call django API for respective fields
            $("#fill").empty();
            $("#fill_last").empty();
            $('<div class="form-group"><label class="control-label" for="id_roadOrDirt">Trail or Road</label>' +
            '<select class="form-control" id="id_roadOrDirt" name="roadOrDirt" type="hidden" required="required" title="">' +
            '<option value="SURFACE">Select Surface</option>' +
            '<option value="TRAIL" selected>NA</option>' +
            '<option value="ROAD">Road</option></select></div>').appendTo("#fill").hide();
            $.ajax({
                dataType: "html",
                url: "http://127.0.0.1:8000/bike/form/" + typeEvent.toLowerCase(),
                success: function (data) {
                    $(data).each(function (key, data) {
                        $(data).appendTo("#fill").hide().fadeIn(1250)
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
        url: "/bike/" + whichForm + "/", //Use whichForm to set the URL for the API
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