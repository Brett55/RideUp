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