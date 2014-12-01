from django.contrib.gis.db import models
from django.contrib.auth.models import User

LEVEL_CHOICE = (
    ('GREEN', "Green"),
    ('BLUE', "Blue"),
    ('BLACK', "Black"),
    ('DBL_BLACK', "Double Black")
)

ROAD_CHOICE = (
    ('10MPH', "10Mph"),
    ('15MPH', "15Mph"),
    ('20MPH', "20Mph"),
    ('25MPH', "25Mph")
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


class RideLocation(models.Model):
    name = models.CharField('Ride Spot/Event', max_length=50)

    EVENT_TYPE = (
        ('RACE', "RACE"),
        ('GROUP_RIDE', "Group Ride"),
        ('TRAIL_WORK DAY', "Trail Work Day"),
        ('BIKE_SWAP', "Bike Swap"),
        ('SPECIAL_EVENT', "Special Event"),
        ('CONFERENCE', "Conference")
    )

    rideType = models.CharField('Type of Ride/Event', max_length=50, choices=EVENT_TYPE)

    geom = models.PointField(srid=4326)
    objects = models.GeoManager()

    def __str__(self):
        return self.name


class GroupRideDirt(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=2, choices=MOUNTAIN_CHOICE, null=True)

    ridetime = models.DateTimeField('Ride Time', null=True)

    rideLevel = models.CharField('MTB Ride Difficulty', max_length=20, choices=LEVEL_CHOICE, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class GroupRideRoad(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=2, choices=MOUNTAIN_CHOICE, null=True)

    ridetime = models.DateTimeField('Ride Time', null=True)

    rideLevel = models.CharField('Road Ride Difficulty', max_length=20, choices=ROAD_CHOICE, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class RideSpecialEvent(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    roadOrDirt = models.CharField('Road or Dirt', max_length=4, choices=SURFACE_CHOICE)
    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField(null=True)
    website = models.CharField(max_length=100, null=True)
    objects = models.GeoManager()


class Race(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    roadOrDirt = models.CharField('Road or Dirt', max_length=4, choices=SURFACE_CHOICE)
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=2, choices=MOUNTAIN_CHOICE, null=True)

    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField(null=True)
    website = models.CharField(max_length=100, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class TrailWorkDay(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    ridetime = models.DateTimeField(null=False)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class BikeSwap(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    ridetime = models.DateTimeField(null=True)
    objects = models.GeoManager()


class Conference(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)

    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField(null=True)
    website = models.CharField(max_length=100, null=True)
    objects = models.GeoManager()