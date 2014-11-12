from django import forms
from django.forms import ModelForm
from models import *

# main form
class AddRideSpot(forms.Form):
    coordinates = forms.CharField(max_length=200, required=True)
    name = forms.CharField(max_length=100, required=True)
    # riders = models.ManyToManyField(User)
    username = forms.CharField(max_length=100, required=True)
    password = forms.CharField(max_length=100, required=True)
    rideTypeMTB = forms.CharField(max_length=100)
    roadOrDirt = forms.CharField(max_length=50, required=True)
    rideLevel = forms.CharField(max_length=50, required=True)

    def clean(self):
        cleaned_data = self.cleaned_data
        coordinates = cleaned_data.get("coordinates")
        name = cleaned_data.get("name")
        username = cleaned_data.get("username")
        password = cleaned_data.get("password")
        rideTypeMTB = cleaned_data.get("rideTypeMTB")
        roadOrDirt = cleaned_data.get("roadOrDirt")
        rideLevel = cleaned_data.get("rideLevel")

        return cleaned_data