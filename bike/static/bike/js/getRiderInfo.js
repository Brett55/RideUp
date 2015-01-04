//function to get all riders attached to an event and display them as a list
function getRiders(event) {

    //pass objects from event dictionary to variables
    var member_non_member = event.data.param1;
    var value = event.data.param2;

    $('#riderInfoTable').remove();
    $('#detailTable').after('<table class="table table-striped table-bordered table-condensed">' +
                        '<tbody id="riderInfoTable"><tr><th>Riders</th></tr></tbody></table>');
    for (var rider_id in value) {
        $.ajax({
            dataType: "json",
            url: "http://cryptic-mountain-5756.herokuapp.com/bike/riders/" + member_non_member + "/" + value[rider_id] + "/",
            success: function (data) {
                $(data).each(function (key, data) {
                    //members ajax call returned data
                    if (member_non_member === "member") {
                        $('<tr><td>' + data.fields.first_name + '</td></tr>').appendTo('#riderInfoTable');
                    }
                    //non members ajax call returned data
                    else {
                        $('<tr><td>' + data.fields.name + '</td></tr>').appendTo('#riderInfoTable');
                    }
                });
            }
        });
    }
}