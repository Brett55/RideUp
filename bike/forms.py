from django import forms


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

SURFACE_CHOICE = (
    ('TRAIL', 'Trail'),
    ('ROAD', 'Road')
)

EVENT_TYPE = (
    ('RACE', "Race"),
    ('GROUP_RIDE', "Group Ride"),
    ('TRAIL_WORK_DAY', "Trail Work Day"),
    ('BIKE_SWAP', "Bike Swap"),
    ('SPECIAL_EVENT', "Special Event"),
    ('CONFERENCE', "Conference")
)


class KickOff(forms.Form):
    #RideLocation Class params
    coordinates = forms.CharField(max_length=200, widget=forms.TextInput(attrs={'type': "hidden"}), required=True)
    name = forms.CharField(max_length=100,widget=forms.TextInput(
        attrs={'style': 'height:30px'}), required=True)


    rideType = forms.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True)


class AddRideSpot(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Ride', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M', attrs={'style': 'height:30px'}), required=True)

    username = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideTypeMTB = forms.ChoiceField(label='Type', choices=MOUNTAIN_CHOICE,required=True)
    roadOrDirt = forms.ChoiceField(label='Road or Trail', choices=SURFACE_CHOICE, required=True)
    rideLevel = forms.ChoiceField(label='Skill Level', choices=LEVEL_CHOICE, required=True)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class RideSpecialEvent(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Event', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideTypeMTB = forms.ChoiceField(choices=MOUNTAIN_CHOICE,required=True)
    roadOrDirt = forms.ChoiceField(choices=SURFACE_CHOICE, required=True)
    rideLevel = forms.ChoiceField(choices=LEVEL_CHOICE, required=True)

    hostedBy = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    cost = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    website = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)


class Race(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Race', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    rideTypeMTB = forms.ChoiceField(choices=MOUNTAIN_CHOICE,required=True)

    hostedBy = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    locationAddress = forms.CharField(label='Address', max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    cost = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    website = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)



class TrailWorkDay(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Trail Maintence Time', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    description = forms.CharField(max_length=300,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    postRideBeer = forms.CharField(label='Post Ride Beer & Food Spot', required=False)


class BikeSwap(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Bike Swap', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    locationAddress = forms.CharField(label='Address', max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)


class Conference(forms.Form):
    #Ride Class parmams
    ridetime = forms.DateTimeField(label='Time of the Conference', input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style': 'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

    locationAddress = forms.CharField(label='Address', max_length=100,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)
    description = forms.CharField(max_length=300,widget=forms.TextInput(attrs={'style': 'height:30px'}), required=False)

