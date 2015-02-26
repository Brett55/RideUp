from django.contrib.gis.db import models
from django.contrib.auth.models import User

LEVEL_CHOICE = (
    ('Green', "Green"),
    ('Blue', "Blue"),
    ('Black', "Black"),
    ('Double Black', "Double Black")
)

ROAD_CHOICE = (
    ("Group A", "Group A"),
    ("Group B", "Group B"),
    ("Group C", "Group C"),
    ("Group D", "Group D")
)

MOUNTAIN_CHOICE = (
    ('Cross Country', "Cross Country"),
    ('Down Hill', "Down Hill"),
    ('Free Ride', "Free Ride"),
    ('Dirt Jump', "Dirt Jump")
)


class RideLocation(models.Model):
    name = models.CharField('Ride Spot/Event', max_length=50)

    FREQUENCY = (
        ('Weekly', 'Weekly'),
        ('Bi-Weekly', 'Bi-Weekly'),
        ('One Time for Now', 'One Time for Now')
    )

    EVENT_TYPE = (
        ('BLANK', "Select Type"),
        ('RACE', "Race"),
        ('GROUP_RIDE', "Group Ride"),
        ('SPECIAL_EVENT', "Special Event"),
        ('TRAIL_WORK_DAY', "Trail Work"),
        ('CONFERENCE', "Conference"),
        ('BIKE_SWAP', "Bike Swap")
    )

    SURFACE_CHOICE = (
        ('TRAIL', 'Trail'),
        ('ROAD', 'Road'),
    )

    event_Frequency = models.CharField('Type of Ride/Event', max_length=50, choices=FREQUENCY)
    editable = models.CharField(max_length=3)
    rideType = models.CharField('Type of Ride/Event', max_length=50, choices=EVENT_TYPE)
    roadOrDirt = models.CharField('Surface Type', max_length=50, choices=SURFACE_CHOICE)

    geom = models.PointField(srid=4326)

    def __unicode__(self):
        return self.name

    objects = models.GeoManager()


class NonMembers(models.Model):
    name = models.CharField(max_length=50, null=False)


class RideUpEvent(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    ridetime = models.DateTimeField('Ride Time')
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    website = models.CharField(max_length=100, null=True)
    cost = models.CharField(max_length=50, null=True)
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=50, choices=MOUNTAIN_CHOICE, null=True)
    description = models.CharField(max_length=300, null=False)
    hostedBy = models.CharField('Hosted By', max_length=50, null=True)
    locationAddress = models.CharField('Location Address', max_length=50, null=True)

    class Meta:
        abstract = True


class GroupRideDirt(RideUpEvent):
    rideLevelTrail = models.CharField('MTB Ride Difficulty', max_length=20, choices=LEVEL_CHOICE, null=True)
    objects = models.GeoManager()


class GroupRideRoad(RideUpEvent):
    rideLevelRoad = models.CharField('Road Ride Difficulty', max_length=20, choices=ROAD_CHOICE, null=True)
    objects = models.GeoManager()


class RideSpecialEvent(RideUpEvent):
    objects = models.GeoManager()


class TrailRace(RideUpEvent):
    objects = models.GeoManager()


class RoadRace(RideUpEvent):
    objects = models.GeoManager()


class TrailWorkDay(RideUpEvent):
    objects = models.GeoManager()


class BikeSwap(RideUpEvent):
    objects = models.GeoManager()


class Conference(RideUpEvent):
    objects = models.GeoManager()



