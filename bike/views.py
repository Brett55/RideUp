import models
import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.core.context_processors import csrf
from django.core import serializers
from django.contrib.gis.geos import Point
from django.template import Context, Template
from django.contrib.auth.models import User
from django.utils.html import escape
from django.db.models.loading import get_model
from django.http import QueryDict


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


def get_rider_info(request, member_non_member):
    if member_non_member == "member":
        query_set = User.objects.filter(id__in=request.GET.getlist('riders[]'))
        data = serializers.serialize("json", query_set, fields='first_name')
    else:
        query_set = models.NonMembers.objects.filter(id__in=request.GET.getlist('riders[]'))
        data = serializers.serialize("json", query_set)
    return HttpResponse(data, content_type='application/json')


def get_form_and_model(req, model_name, update=False):
    form_main = None
    model = None
    cd = None
    if model_name == "GroupRideDirt":
        form_main = forms.AddRideSpotTrail(req, update=update)
    elif model_name == "GroupRideRoad":
        form_main = forms.AddRideSpotRoad(req, update=update)
    elif model_name == "RideSpecialEvent":
        form_main = forms.RideSpecialEvent(req, update=update)
    elif model_name == "TrailRace":
        form_main = forms.TrailRace(req, update=update)
    elif model_name == "RoadRace":
        form_main = forms.RoadRace(req, update=update)
    elif model_name == "TrailWorkDay":
        form_main = forms.TrailWorkDay(req, update=update)
    elif model_name == "BikeSwap":
        form_main = forms.BikeSwap(req, update=update)
    elif model_name == "Conference":
        form_main = forms.Conference(req, update=update)

    if form_main.is_valid():
        model = get_model("bike", model_name)
        cd = form_main.cleaned_data
        for key in cd.keys():
            cd[key] = escape(cd.get(key))
    else:
        HttpResponse(form_main.errors)

    return cd, model

def update_event(request, model_name, key):
    if request.method == "PUT":
        req = QueryDict(request.body)
    update = True
    cd, model = get_form_and_model(req, model_name, update)
    query_set = model.objects.filter(location_id=key)
    query_set.update(**cd)
    return HttpResponse("Updated Event!")

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
            username = escape(cd['username'])
            password = escape(cd['password'])
            new_guy = User.objects.create_user(username, "adwa@gmail.com", password, first_name=cd['first_name'])
            query_set.riders.add(new_guy)
            query_set.save()

            return HttpResponse(username + ' Added')

        elif form_non_member.is_valid():
            cd = form_non_member.cleaned_data
            new_guy_non_member = models.NonMembers()
            new_guy_non_member.name = escape(cd['first_name'])
            new_guy_non_member.save()
            query_set.non_member_riders.add(new_guy_non_member)
            query_set.save()

            return HttpResponse(new_guy_non_member.name + ' Added')
        else:
            return HttpResponse(form_non_member.errors)

    else:
        return HttpResponse("ERROR")


def process_create_ride_form(request):
    form_kickoff = forms.KickOff(request.POST)
    new_point = models.RideLocation()
    if form_kickoff.is_valid():
        cd_form_kickoff = form_kickoff.cleaned_data
        coordinates = cd_form_kickoff['coordinates'].split(',')
        new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
        new_point.name = escape(cd_form_kickoff['name'])
        new_point.event_Frequency = escape(cd_form_kickoff['event_Frequency'])
        new_point.editable = escape(cd_form_kickoff['editable'])
        new_point.rideType = escape(cd_form_kickoff['rideType'])
        new_point.roadOrDirt = escape(cd_form_kickoff['roadOrDirt'])
        new_point.save()

        return new_point
    else:
        return HttpResponse(form_kickoff.errors)


def create_ride(request, model_name):
    if request.method == "POST":
        req = request.POST
        new_point = process_create_ride_form(request)
        cd, model = get_form_and_model(req, model_name)
        new_ride = model(**cd)
        new_ride.location = new_point
        new_ride.save()

        return HttpResponse('Ride Created!')

    else:
        return HttpResponse("ERROR")