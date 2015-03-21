'use strict';

var editJoinRideForm = (function () {
    var onOrOff = true;

    return {
        change: function () {
            var editRideButton = $("#editRideButton");
            if (onOrOff) {
                $("<a class='edit-tag' href='#'><span class='glyphicon glyphicon-edit'>&nbsp</span></a").prependTo(".editable");
                editRideButton.removeClass("btn-warning");
                editRideButton.toggleClass("btn-success");
                editRideButton.text("Save Edits");
                $(".edit-tag").click(editJoinRideForm.edit);
                onOrOff = !onOrOff;
            }
            else {
                editRideButton = $("#editRideButton");
                $(".edit-tag").remove();
                editRideButton.removeClass("btn-success");
                editRideButton.toggleClass("btn-warning");
                editRideButton.text("Edit Ride");
                editJoinRideForm.save();
                onOrOff = !onOrOff;
            }
        },
        edit: function () {
            var editId = $(this).parent().attr('id');
            if (editId === "ridetime") {
                $(this).parent().replaceWith('<div><input id="id_ridetime" type="text"/></div>');
                jQuery('#id_ridetime').datetimepicker({
                    format: 'm-d-Y g:i A',
                    pick12HourFormat: true
                });
            }
        },
        save: function () {
            console.log(marker);
            var dateInfo = $("#id_ridetime").val();
            $.ajax({
                type: "PUT",
                url: "update_event/" + marker.feature.id, //Use whichForm to set the URL for the API
                data: dateInfo,
                success: function () {
                    //close popup and add 'Success'
                    //$('.bootbox-body').empty().append(
                    //        '<p>Success!</p>');
                },
                error: function (xhr, errmsg, err) {
                    console.log("ERROR!");
                    $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                    " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
                    console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
                }
            });
        }
    };
}());
