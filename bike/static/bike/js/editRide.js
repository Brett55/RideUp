var editJoinRideForm = (function () {
    var onOrOff = true;
    return {
        change: function () {
            if (onOrOff) {
                $("<span class='edit-tag glyphicon glyphicon-edit'>&nbsp</span>").prependTo(".editable");
                $("#editRideButton").removeClass("btn-warning");
                $("#editRideButton").toggleClass("btn-success");
                $("#editRideButton").text("Save Edits");
                onOrOff = !onOrOff;
            }
            else {
                $(".edit-tag").remove();
                $("#editRideButton").removeClass("btn-success");
                $("#editRideButton").toggleClass("btn-warning");
                $("#editRideButton").text("Edit Ride");
                onOrOff = !onOrOff;
            }
        }
    };
}());