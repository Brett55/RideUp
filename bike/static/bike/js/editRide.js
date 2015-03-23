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
            editJoinRideForm.reset();
            $(".edit-tag").remove();
            editJoinRideForm.save(ajax_URL);
        },

        reset: function() {
            var editRideButton = $("#editRideButton");
            editRideButton.removeClass("btn-success");
            editRideButton.removeClass("editSubmit");
            editRideButton.toggleClass("btn-warning");
            editRideButton.text("Edit Ride");
        },

        edit: function () {
            var editId = $(this).parent().attr('id');
            if (editId === "ridetime") {
                $(this).parent().replaceWith('<div><input id="' + editId + '"' + 'type="text"/></div>');
                jQuery('#ridetime').datetimepicker({
                    format: 'm-d-Y g:i A',
                    pick12HourFormat: true
                });
            }
            else {
                $(this).parent().replaceWith('<div><input id="' + editId + '"' + 'type="text"/></div>');
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
