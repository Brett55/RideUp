//Click handlers for nav bar
$('#howTo').click(function() { popUps(this.id); return false; });
$('#members').click(function() { popUps(this.id); return false; });
$('#about').click(function() { popUps(this.id); return false; });

function popUps(idName) {

    if (idName === 'howTo') {
        bootbox.alert('<p class="navText">Simply click on the map and set a marker. You will then be prompted to add an event of your ' +
        'choosing. <br><br>Not sure where things are? Just click on the search tool in the upper right corner of the map');
    }
    else if (idName === 'members') {
        bootbox.alert('<p class="navText"> Becoming a member of Ride[up] is easy. The benefits of membership include posting parts for sale, ' +
        'creating new events with 1 click, and communicating to other Ride[up] Members</p>');
    }

    else if (idName === 'about') {
        bootbox.alert('<p class="navText"> The concept behind Ride[up] is simple:<br><br><br> 1) Find local bicycle related events<br>' +
        '<br> 2) Coordinate group rides with ease</p>');
    }
}