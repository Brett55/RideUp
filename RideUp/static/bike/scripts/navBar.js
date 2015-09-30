//Click handlers for nav bar
$('#howTo').click(function() { popUps(this.id); return false; });
$('#members').click(function() { popUps(this.id); return false; });
$('#about').click(function() { popUps(this.id); return false; });

function popUps(idName) {

    if (idName === 'howTo') {
        bootbox.alert('<p class="navText">Simply click on the map and set a marker. You will then be prompted to add an event of your ' +
        'choosing. <br><br>Not sure where things are? Just click the search tool in the upper right corner of the map');
    }
    else if (idName === 'members') {
        bootbox.alert('<p class="navText"> Becoming a member of Ride[up] is easy, and free. ' +
        'The benefits of membership include: <br>' +
        '<ul class="navText">' +
        '<li>Ability to Sell Parts at Events</li>' +
        '<li>Create New Events with 1 click</li>' +
        '<li>Communicating with other Ride[up] Members</li>'+
        '<li>Profile Pictures</li>');
    }

    else if (idName === 'about') {
        bootbox.alert('<p class="navText text center"> The concept behind Ride[up] is simple:<br><br> 1) Find local bicycle related events<br>' +
        '<br> 2) Coordinate group rides with ease</p>');
    }
}
