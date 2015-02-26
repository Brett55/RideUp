from django import forms
from django.forms import ModelForm
import models


LEVEL_CHOICE = (
    ('GREEN', "Green"),
    ('BLUE', "Blue"),
    ('BLACK', "Black"),
    ('DBL_BLACK', "Double Black")
)

MOUNTAIN_CHOICE = (
    ('Cross Country', "Cross Country"),
    ('Down Hill', "Down Hill"),
    ('Free Ride', "Free Ride"),
    ('Dirt Jump', "Dirt Jump")
)

EVENT_TYPE = (
    ('BLANK', "Select Type"),
    ('RACE', "Race"),
    ('GROUP_RIDE', "Group Ride"),
    ('SPECIAL_EVENT', "Special Event"),
    ('TRAIL_WORK_DAY', "Trail Work"),
    ('CONFERENCE', "Conference"),
    ('BIKE_SWAP', "Bike Swap")
)

ROAD_CHOICE = (
    ("Group A",  "Group A"),
    ("Group B", "Group B"),
    ("Group C", "Group C"),
    ("Group D", "Group D")
)

SURFACE_CHOICE = (
    ('TRAIL', 'Trail'),
    ('ROAD', 'Road')
)

FREQUENCY = (
    ('Weekly', 'Weekly'),
    ('Bi-Weekly', 'Bi-Weekly'),
    ('One Time for Now', 'One Time for Now')
)


class KickOff(forms.Form):
    # RideLocation Class params
    coordinates = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'type': "hidden"}), required=True)
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'style': 'height:30px'}), required=True)

    editable = forms.CharField(max_length=3)
    event_Frequency = forms.CharField(label='Event Frequency', max_length=100, required=True)
    rideType = forms.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True, initial='BLANK')
    roadOrDirt = forms.ChoiceField(label='Trail or Road', choices=SURFACE_CHOICE, required=True)


class JoinRide(forms.Form):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)
    username = forms.CharField(label='Username', max_length=100, widget=forms.TextInput(), required=True)
    password = forms.CharField(label='Password', max_length=100, widget=forms.TextInput(), required=True)


class JoinRideNonMember(forms.Form):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)


class AddRideSpotTrail(ModelForm):
    class Meta:
        model = models.GroupRideDirt
        fields = ('ridetime', 'rideTypeMTB', 'rideLevelTrail', 'postRideBeer')


class AddRideSpotRoad(ModelForm):
    class Meta:
        model = models.GroupRideRoad
        fields = ('ridetime', 'postRideBeer', 'rideLevelRoad')


class RideSpecialEvent(ModelForm):
    class Meta:
        model = models.RideSpecialEvent
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer', 'hostedBy', 'cost', 'website')


class TrailRace(ModelForm):
    class Meta:
        model = models.TrailRace
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer',
                  'hostedBy', 'cost', 'website', 'rideTypeMTB')


class RoadRace(ModelForm):
    class Meta:
        model = models.RoadRace
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer', 'hostedBy', 'cost', 'website')


class TrailWorkDay(ModelForm):
    class Meta:
        model = models.TrailWorkDay
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer')


class BikeSwap(ModelForm):
    class Meta:
        model = models.BikeSwap
        fields = ('ridetime', 'locationAddress', 'description')


class Conference(ModelForm):
    class Meta:
        model = models.Conference
        fields = ('ridetime', 'locationAddress', 'description')


