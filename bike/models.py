import datetime
from django.contrib.gis.db import models
from django.contrib.auth.models import User
from django.utils import timezone
 
class RideLocation(models.Model):
    name = models.CharField(max_length=50)
    geom = models.PointField(srid=4326)
    objects = models.GeoManager()
    def __str__(self):
        return self.name
 
class Ride(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=100)
    ridetime = models.DateTimeField('Ride Time',auto_now=True)
    roadOrDirt = models.CharField('Road or Dirt', max_length=100)
    rideLevel = models.CharField('Ride Difficulty', max_length=100)
    objects = models.GeoManager()
 
# Auto-generated `LayerMapping` dictionary for bike_hud model
bike_hud_mapping = {
    'name' : 'Name',
    'geom' : 'POINT',
    }