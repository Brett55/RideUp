import models
import forms
from django.shortcuts import render_to_response
from django.http import HttpResponse, HttpResponseRedirect
from django.core.context_processors import csrf
from django.core import serializers
from django.contrib.gis.geos import Point
from django.contrib.auth.models import User


def add_point(request):

    if request.method == 'POST':
        form = forms.AddRideSpot(request.POST)
        if form.is_valid():
            new_point = models.RideLocation()

            cd = form.cleaned_data
            coordinates = cd['coordinates'].split(',')
            new_point.geom = Point(float(coordinates[0]), float(coordinates[1]))
            new_point.name = cd['name']
            new_point.save()

            new_ride = models.Ride()
            new_ride.location = new_point
            new_ride.save()       

            username = cd['username']
            password = cd['password']
            newGuy = User.objects.create_user(username, "adwa@gmail.com", password)
            new_ride.riders.add(newGuy)

            new_ride.rideTypeMTB = cd['rideTypeMTB']
            new_ride.roadOrDirt = cd['roadOrDirt']
            new_ride.rideLevel = cd['rideLevel']
            
            new_ride.ridetime = str(cd['ridetime'])

            new_ride.save()
            
            return HttpResponseRedirect('/bike/add_point/success')

        else:
            return HttpResponseRedirect('/bike/add_point/error')
    else:
        form = forms.AddRideSpot()

    args = {}
    args.update(csrf(request))
    args['form'] = forms.AddRideSpot()

    return render_to_response('bike/add_point.html', args)


def form_error(request):
    return render_to_response('bike/form_error.html')


def form_success(request):
    return render_to_response('bike/form_success.html')

# def moreDataOld(request):
#     ridelocations = models.RideLocation.objects.all()
#     rideInfos = models.Ride.objects.all()
#     to_Json = {}
#     x = 0
#     for info in rideInfos:
#         infoDict = {}
#         infoDict['location'] = str(info.location)
#         infoDict['rideTypeMTB'] = info.rideTypeMTB
#         infoDict['roadOrDirt'] = info.roadOrDirt
#         infoDict['rideLevel'] = info.rideLevel
#         infoDict['riders'] = str(info.riders.all()[0])
#         to_Json['obj' + str(x)] = infoDict
#         x += 1
#     response_data = simplejson.dumps(to_Json)
#     return HttpResponse(response_data, content_type="application/json")


def moreData(request, pk):
    tasks = models.Ride.objects.filter(pk=pk)
    data = serializers.serialize("json", tasks)
    return HttpResponse(data, content_type='application/json')