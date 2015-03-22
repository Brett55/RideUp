'use strict';

var editJoinRideForm = (function () {
    var onOrOff = true;

    return {
        change: function (event) {
            var ajax_URL = event.data.param1;
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
                editJoinRideForm.reset();
                $(".edit-tag").remove();
                editJoinRideForm.save(ajax_URL);
                onOrOff = !onOrOff;
            }
        },

        reset: function() {
            var editRideButton = $("#editRideButton");
            editRideButton.removeClass("btn-success");
            editRideButton.toggleClass("btn-warning");
            editRideButton.text("Edit Ride");
            onOrOff = !onOrOff;
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

        save: function (ajax_URL) {
            var dateInfo = $("#id_ridetime").val();
            $.ajax({
                type: "POST",
                url: ajax_URL + "update_event/", //Use whichForm to set the URL for the API
                data: {"ridetime": dateInfo},
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
        }
    };
}());
