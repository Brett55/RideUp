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
    ('DIRT', 'Dirt'),
    ('ROAD', 'Road')
)


class AddRideSpot(forms.Form):
    #RideLocation Class params
    coordinates = forms.CharField(max_length=200, required=True)
    name = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style':'height:30px'}), required=True)

    #Ride Class parmams
    ridetime = forms.DateTimeField(input_formats=['%Y-%m-%d %H:%M'],
        widget=forms.DateTimeInput(format='%Y-%m-%d %H:%M',attrs={'style':'height:30px'}))

    username = forms.CharField(max_length=100,widget=forms.TextInput(attrs={'style':'height:30px'}), required=True)
    password = forms.CharField(max_length=100, widget=forms.TextInput(attrs={'style':'height:30px'}), required=True)
    rideTypeMTB = forms.ChoiceField(choices=MOUNTAIN_CHOICE,required=True)
    roadOrDirt = forms.ChoiceField(choices=SURFACE_CHOICE, required=True)
    rideLevel = forms.ChoiceField(choices=LEVEL_CHOICE, required=True)

    def clean(self):
        cleaned_data = self.cleaned_data
        coordinates = cleaned_data.get("coordinates")
        name = cleaned_data.get("name")
        ridetime = cleaned_data.get("ridetime")
        username = cleaned_data.get("username")
        password = cleaned_data.get("password")
        rideTypeMTB = cleaned_data.get("rideTypeMTB")
        roadOrDirt = cleaned_data.get("roadOrDirt")
        rideLevel = cleaned_data.get("rideLevel")

        return cleaned_data