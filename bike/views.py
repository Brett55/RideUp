import models
import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from django.core import serializers
from django.contrib.gis.geos import Point
from django.template import Context, Template
from django.contrib.auth.models import User
from django.db.models.loading import get_model


def index(request):
    args = {}
    args.update(csrf(request))
    args['kickoff'] = forms.KickOff()
    args['join_ride'] = forms.JoinRide()
    args['join_ride_non_member'] = forms.JoinRideNonMember()
    return render_to_response('bike/index.html', args)


def more_data(request, group, key):
    model = get_model("bike", group)
    query_set = model.objects.filter(location_id=key)
    data = serializers.serialize("json", query_set)
    return HttpResponse(data, content_type='application/json')


def get_rider_info(request, member_non_member, rider_id):
    if member_non_member == "member":
        query_set = User.objects.filter(id=rider_id)
        data = serializers.serialize("json", query_set, fields=('first_name'))
    else:
        query_set = models.NonMembers.objects.filter(id=rider_id)
        data = serializers.serialize("json", query_set)

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
                 '{% bootstrap_form ' + form_type + ' %}'
                    +'<div class="form-group" style="display: block;">'
                        +'<label class="control-label" for="id_description">How often will this Ride/Event occur?</label>'
                        +'<div class="radio">'
                            +'<label>'
                                +'<input type="radio" name="event_Frequency" id="id_event_Frequency1" value="Every Week" checked>'
                                +'Every Week'
                            +'</label>'
                        +'</div>'
                        +'<div class="radio">'
                            +'<label>'
                                +'<input type="radio" name="event_Frequency" id="id_event_Frequency2" value="Every Other Week">'
                                +'Every Other Week'
                            +'</label>'
                        +'</div>'
                        +'<div class="radio">'
                            +'<label>'
                                +'<input type="radio" name="event_Frequency" id="id_event_Frequency3" value="Just Once for Now">'
                                +'Just Once for Now'
                            +'</label>'
                        +'</div>'
                    +'</div>'
                    +'<div class="form-group" style="display: block;">'
                        +'<label class="control-label" for="id_description">Allow Others to Edit this Event?</label>'
                        +'<div class="radio">'
                            +'<label>'
                                +'<input type="radio" name="editable" id="id_editable_yes" value="Yes" checked>'
                                +'Yes'
                            +'</label>'
                        +'</div>'
                        +'<div class="radio">'
                            +'<label>'
                                +'<input type="radio" name="editable" id="id_editable_no" value="No">'
                                +'No'
                            +'</label>'
                        +'</div>'
                    +'</div>'
                    +'<input type="submit" name="submit" id="nextSubmit" class="btn btn-default form-group btn-primary" value="Submit">')
    c = Context({str(form_type): args[str(form_type)]})
    html = t.render(c)

    return HttpResponse(html)


def add_rider(request, group, key):
    model = get_model("bike", group)
    query_set = model.objects.get(location_id=key)

    if request.method == 'POST':
        form = forms.JoinRide(request.POST)
        form_non_member = forms.JoinRideNonMember(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            username = cd['username']
            password = cd['password']
            new_guy = User.objects.create_user(username, "adwa@gmail.com", password, first_name=cd['first_name'])
            query_set.riders.add(new_guy)
            query_set.save()

            return HttpResponseRedirect('/add_point/success')

        elif form_non_member.is_valid():
            cd = form_non_member.cleaned_data
            new_guy_non_member = models.NonMembers()
            new_guy_non_member.name = cd['first_name']
            new_guy_non_member.save()
            query_set.non_member_riders.add(new_guy_non_member)
            query_set.save()

            return HttpResponse("SUCCESS")
        else:
            return HttpResponse(form_non_member.errors)


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
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
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

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


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
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.GroupRideRoad()
            new_ride.location = new_point
            new_ride.rideLevelRoad = cd['rideLevelRoad']
            new_ride.ridetime = cd['ridetime']
            new_ride.postRideBeer = cd['postRideBeer']
            new_ride.save()

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def race_trail(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.TrailRace(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
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

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def race_road(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.RoadRace(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
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

            new_ride.save()

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def special_event(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.RideSpecialEvent(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.RideSpecialEvent()
            new_ride.location = new_point
            new_ride.ridetime = cd['ridetime']
            new_ride.hostedBy = cd['hostedBy']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.cost = cd['cost']
            new_ride.website = cd['website']
            new_ride.save()

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def trail_work_day(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.TrailWorkDay(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
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

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def bike_swap(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.BikeSwap(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.BikeSwap()
            new_ride.ridetime = cd['ridetime']
            new_ride.location = new_point
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.save()

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponseRedirect('/add_point/error')


def conference(request):
    if request.method == 'POST':
        form_kickoff = forms.KickOff(request.POST)
        form = forms.Conference(request.POST)
        if form.is_valid() and form_kickoff.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            cd_form_kickoff = form_kickoff.cleaned_data

            coordinates = cd_form_kickoff['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd_form_kickoff['name']
            new_point.event_Frequency = cd_form_kickoff['event_Frequency']
            new_point.editable = cd_form_kickoff['editable']
            new_point.rideType = cd_form_kickoff['rideType']
            new_point.roadOrDirt = cd_form_kickoff['roadOrDirt']
            new_point.save()

            new_ride = models.Conference()
            new_ride.location = new_point
            new_ride.ridetime = cd['ridetime']
            new_ride.locationAddress = cd['locationAddress']
            new_ride.description = cd['description']
            new_ride.save()

            return HttpResponseRedirect('/add_point/success')

        else:
            return HttpResponse(form_kickoff.errors)


def form_error(request):
    return render_to_response('bike/form_error.html')


def form_success(request):
    return render_to_response('bike/form_success.html')