from django import forms


LEVEL_CHOICE = (
    ('GREEN', "Green"),
    ('BLUE', "Blue"),
    ('BLACK', "Black"),
    ('DBL_BLACK', "Double Black")
)

LEVEL_CHOICE = (
    ('GREEN', "Green"),
    ('BLUE', "Blue"),
    ('BLACK', "Black"),
    ('DBL_BLACK', "Double Black")
)

MOUNTAIN_CHOICE = (
    ('XC', "Cross Country"),
    ('DH', "Down Hill"),
    ('FR', "Free Ride"),
    ('DJ', "Dirt Jump")
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
    ('10MPH', "10Mph"),
    ('15MPH', "15Mph"),
    ('20MPH', "20Mph"),
    ('25MPH', "25Mph")
)

SURFACE_CHOICE = (
    ('TRAIL', 'Trail'),
    ('ROAD', 'Road')
)


class KickOff(forms.Form):
    # RideLocation Class params
    coordinates = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'type': "hidden"}), required=True)
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'style': 'height:30px'}), required=True)

    rideType = forms.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True, initial='BLANK')
    roadOrDirt = forms.CharField(widget=forms.TextInput(attrs={'type': "hidden"}), required=True)


class AddRideSpotTrail(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Ride', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}),
                                   required=True)

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)

    rideLevel = forms.ChoiceField(label='Skill Level', choices=LEVEL_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class AddRideSpotRoad(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Ride', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}),
                                   required=True)

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    rideLevel = forms.ChoiceField(label='Average Pace', choices=ROAD_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RideSpecialEvent(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Event', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideLevel = forms.ChoiceField(label='Ride Level', choices=LEVEL_CHOICE, required=True)

    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)


class TrailRace(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Race', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideTypeMTB = forms.ChoiceField(label='Discipline', choices=MOUNTAIN_CHOICE, required=True)

    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RoadRace(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Race', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    hostedBy = forms.CharField(label='Hosted By', max_length=100,
                               widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)
    cost = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    website = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class TrailWorkDay(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Trail Maintenance Time', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class BikeSwap(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Bike Swap', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)


class Conference(forms.Form):
    # Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Conference', input_formats=['%Y-%m-%d %H:%M'],
                                   widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    locationAddress = forms.CharField(label='Address', max_length=100,
                                      widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300, widget=forms.TextInput(attrs={'style': 'height:30px'}),
                                  required=False)

