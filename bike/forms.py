from django import forms


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

    editable = forms.BooleanField(initial=True)
    event_Frequency = forms.CharField(label='Event Frequency', max_length=100, required=True)
    rideType = forms.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True, initial='BLANK')
    roadOrDirt = forms.ChoiceField(label='Trail or Road', choices=SURFACE_CHOICE, required=True)


class JoinRide(forms.Form):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)
    username = forms.CharField(label='Username', max_length=100, widget=forms.TextInput(), required=True)
    password = forms.CharField(label='Password', max_length=100, widget=forms.TextInput(), required=True)


class JoinRideNonMember(forms.Form):
    first_name = forms.CharField(label='Your Name', max_length=100, widget=forms.TextInput(), required=True)


class AddRideSpotTrail(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)
    rideLevelTrail = forms.ChoiceField(label='Skill Level', choices=LEVEL_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class AddRideSpotRoad(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    rideLevelRoad = forms.ChoiceField(label='Average Pace', choices=ROAD_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RideSpecialEvent(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)


class TrailRace(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RoadRace(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class TrailWorkDay(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)

    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)

    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class BikeSwap(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)


class Conference(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(required=True)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(),
                                  required=False)


