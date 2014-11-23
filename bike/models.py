import datetime
from django.contrib.gis.db import models
from django.contrib.auth.models import User
from django.utils import timezone
 
class RideLocation(models.Model):

    name = models.CharField(,'Ride Spot/Event',max_length=50)
    rideType = models.CharField('Type of Ride/Event',max_length=50)
    geom = models.PointField(srid=4326)
    objects = models.GeoManager()
    def __str__(self):
        return self.name
 
class Ride(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField('Who is Going?'User)

    SURFACE_CHOICE = (
        ('DIRT', 'Dirt'),
        ('ROAD', 'Road')
    )
    roadOrDirt = models.CharField('Road or Dirt', max_length=4,choices=SURFACE_CHOICE)  

    MOUNTAIN_CHOICE = (
        ('XC' , "Cross Country"),
        ('DH' , "Down Hill"),    
        ('FR', "Free Ride"),
        ('DJ' , "Dirt Jump")
    )
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=2,choices=MOUNTAIN_CHOICE,null=True)

    ridetime = models.DateTimeField('Ride Time',null=True)

    LEVEL_CHOICE = (
        ('GREEN' , "Green"),
        ('BLUE' , "Blue"),
        ('BLACK' , "Black"),
        ('DBL_BLACK' , "Double Black")
    )
    rideLevel = models.CharField('Ride Difficulty', max_length=20,choices=LEVEL_CHOICE,null=True)

    objects = models.GeoManager()

class RideEvent(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    EVENT_TYPE = (
        ('RACE' , "Race"),
        ('TRAIL WORK DAY', "Trail Work Day"),
        ('BIKE SWAP' , "Bike Swap"),
        ('LARGE GROUP RIDE' , "Large Group Ride"),
        ('SPECIAL EVENT' , "Special Event"),
        ('CONFERENCE' , "Conference")
    )
    eventType = models.CharField(max_length=50,choices=EVENT_TYPE,null=True)
    hostedBy = models.CharField(max_length=50)
    locationAddress = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    cost = models.CharField(max_length=50)
    eventTime = models.DateTimeField(null=True)
    website = models.CharField(max_length=50)
    ridersAttending = models.ManyToManyField(User)

    objects = models.GeoManager()

 
# Auto-generated `LayerMapping` dictionary for bike_hud model
bike_hud_mapping = {
    'name' : 'Name',
    'geom' : 'POINT',
    }