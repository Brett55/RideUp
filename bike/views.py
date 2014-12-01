import models
import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from django.core import serializers
from django.contrib.gis.geos import Point
from django.contrib.auth.models import User
from django.template import Context, Template


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
            new_point.save()

            new_ride = models.GroupRideDirt()
            new_ride.location = new_point #1
            new_ride.save()

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy) #2

            new_ride.rideTypeMTB = cd['rideTypeMTB'] #3
            new_ride.rideLevel = cd['rideLevel'] #4

            new_ride.ridetime = str(cd['ridetime']) #5
            new_ride.postRideBeer = cd['postRideBeer'] #6

            new_ride.save()

            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')


def form_error(request):
    return render_to_response('bike/form_error.html')


def form_success(request):
    return render_to_response('bike/form_success.html')


def moreData(request, pk):
    tasks = models.GroupRideDirt.objects.filter(pk=pk)
    data = serializers.serialize("json", tasks)
    return HttpResponse(data, content_type='application/json')


def form_updater(request, type):
    args = {}
    args.update(csrf(request))
    args['kickoff'] = forms.KickOff()
    args['group_ride_trail'] = forms.AddRideSpotTrail()
    args['group_ride_road'] = forms.AddRideSpotRoad()
    args['race_trail'] = forms.DirtRace()
    args['race_road'] = forms.RoadRace()
    args['special_event'] = forms.RideSpecialEvent()
    args['trail_work_day'] = forms.TrailWorkDay()
    args['bike_swap'] = forms.BikeSwap()
    args['conference'] = forms.Conference()

    t = Template('{% load bootstrap3 %}' +
                 '{% bootstrap_form ' + type + ' %}' +
                 '<input type="submit" name="submit" id="nextSubmit" class="btn btn-default form-group btn-primary" value="Submit">'
    )
    c = Context({str(type): args[str(type)]})
    html = t.render(c)

    return HttpResponse(html)
