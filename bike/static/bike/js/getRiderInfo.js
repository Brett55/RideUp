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
    }

    //this will not execute if no riders have joined yet
    for (var rider_id in value) {
        $.ajax({
            dataType: "json",
            url: "http://127.0.0.1:8000/bike/riders/" + member_non_member + "/" + value[rider_id] + "/",
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
                $('<tr><td>No Riders Yet...</td></tr>').appendTo('#riderInfofromAjax');
            }
        });
    }
}