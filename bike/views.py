import models
import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from django.core import serializers
from django.contrib.gis.geos import Point
from django.template import Context, Template
from django.contrib.auth.models import User


def index(request):
    args = {}
    args.update(csrf(request))
    args['kickoff'] = forms.KickOff()
    return render_to_response('bike/index.html', args)


def group_ride_trail(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.AddRideSpotTrail(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.GroupRideDirt()
            new_ride.location = new_point
            new_ride.rideTypeMTB = cd['rideTypeMTB']
            new_ride.rideLevelTrail = cd['rideLevelTrail']
            new_ride.ridetime = cd['ridetime']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def group_ride_road(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.AddRideSpotRoad(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.GroupRideRoad()
            new_ride.location = new_point
            new_ride.rideLevelRoad = cd['rideLevelRoad']
            new_ride.ridetime = cd['ridetime']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def race_trail(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.TrailRace(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.TrailRace()
            new_ride.location = new_point
            new_ride.rideTypeMTB = cd['rideTypeMTB']
            new_ride.ridetime = cd['ridetime']
            new_ride.hostedBy = cd['hostedBy']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.cost = cd['cost']
            new_ride.website = cd['website']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def race_road(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.RoadRace(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.RoadRace()
            new_ride.location = new_point
            new_ride.ridetime = cd['ridetime']
            new_ride.hostedBy = cd['hostedBy']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.cost = cd['cost']
            new_ride.website = cd['website']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy) #2

            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def special_event(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.RideSpecialEvent(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.RideSpecialEvent() #change
            new_ride.location = new_point
            new_ride.ridetime = cd['ridetime']
            new_ride.hostedBy = cd['hostedBy']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.cost = cd['cost']
            new_ride.website = cd['website']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def trail_work_day(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.TrailWorkDay(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.TrailWorkDay()
            new_ride.location = new_point
            new_ride.ridetime = cd['ridetime']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy) #2
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def bike_swap(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.BikeSwap(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.BikeSwap()
            new_ride.ridetime = cd['ridetime']
            new_ride.location = new_point
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy) #2
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponse(form.errors)


def conference(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST) # change
        form = forms.Conference(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.Conference() #change
            new_ride.location = new_point #1
            new_ride.ridetime = cd['ridetime']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)
            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def form_error(request):
    return render_to_response('bike/form_error.html')


def form_success(request):
    return render_to_response('bike/form_success.html')


def more_data(request, group, key):
    if group == "race_trail":
        query_set = models.TrailRace.objects.filter(location_id=key)
    elif group == "group_ride_road":
        query_set = models.GroupRideRoad.objects.filter(location_id=key)
    elif group == "group_ride_trail":
        query_set = models.GroupRideDirt.objects.filter(location_id=key)
    elif group == "race_road":
        query_set = models.RoadRace.objects.filter(location_id=key)
    elif group == "special_event":
        query_set = models.RideSpecialEvent.objects.filter(location_id=key)
    elif group == "trail_work_day":
        query_set = models.TrailWorkDay.objects.filter(location_id=key)
    elif group == "bike_swap":
        query_set = models.BikeSwap.objects.filter(location_id=key)
    elif group == "conference":
        query_set = models.Conference.objects.filter(location_id=key)

    data = serializers.serialize("json", query_set)
    return HttpResponse(data, content_type='application/json')


def get_rider_info(request, rider_id):
    query_set = User.objects.only("username").filter(id=rider_id)
    data = serializers.serialize("json", query_set, fields=('username'))
    return HttpResponse(data, content_type='application/json')


def form_updater(request, form_type):
    args = {}
    args.update(csrf(request))
    args['kickoff'] = forms.KickOff()
    args['group_ride_trail'] = forms.AddRideSpotTrail()
    args['group_ride_road'] = forms.AddRideSpotRoad()
    args['race_trail'] = forms.TrailRace()
    args['race_road'] = forms.RoadRace()
    args['special_event'] = forms.RideSpecialEvent()
    args['trail_work_day'] = forms.TrailWorkDay()
    args['bike_swap'] = forms.BikeSwap()
    args['conference'] = forms.Conference()
    args['join_ride'] = forms.JoinRide()

    t = Template('{% load bootstrap3 %}' +
                 '{% bootstrap_form ' + form_type + ' %}' +
                 '<input type="submit" name="submit" id="nextSubmit" class="btn btn-default form-group btn-primary" value="Submit">'
    )
    c = Context({str(form_type): args[str(form_type)]})
    html = t.render(c)

    return HttpResponse(html)
