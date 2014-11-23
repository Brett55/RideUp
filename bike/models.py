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
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=2,choices=MOUNTAIN_CHOICE)

    ridetime = models.DateTimeField(null=True)

    LEVEL_CHOICE = (
        ('GREEN' , "Green"),
        ('BLUE' , "Blue"),
        ('BLACK' , "Black"),
        ('DBL_BLACK' , "Double Black")
    )
    rideLevel = models.CharField('Ride Difficulty', max_length=20,choices=LEVEL_CHOICE)

    objects = models.GeoManager()
 
# Auto-generated `LayerMapping` dictionary for bike_hud model
bike_hud_mapping = {
    'name' : 'Name',
    'geom' : 'POINT',
    }