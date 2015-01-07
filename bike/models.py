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
    editable = models.BooleanField(default=False)
    rideType = models.CharField('Type of Ride/Event', max_length=50, choices=EVENT_TYPE)
    roadOrDirt = models.CharField('Surface Type', max_length=50, choices=SURFACE_CHOICE)

    geom = models.PointField(srid=4326)

    def __unicode__(self):
        return self.name

    objects = models.GeoManager()


class NonMembers(models.Model):
    name = models.CharField(max_length=50, null=False)


class GroupRideDirt(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=50, choices=MOUNTAIN_CHOICE, null=True)
    ridetime = models.DateTimeField()
    rideLevelTrail = models.CharField('MTB Ride Difficulty', max_length=20, choices=LEVEL_CHOICE, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class GroupRideRoad(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    ridetime = models.DateTimeField()
    rideLevelRoad = models.CharField('Road Ride Difficulty', max_length=20, choices=ROAD_CHOICE, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class RideSpecialEvent(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField()
    website = models.CharField(max_length=100, null=True)
    objects = models.GeoManager()


class TrailRace(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    rideTypeMTB = models.CharField('Downhill/XC/Freeride', max_length=50, choices=MOUNTAIN_CHOICE, null=True)
    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField()
    website = models.CharField(max_length=100, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class RoadRace(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField()
    website = models.CharField(max_length=100, null=True)
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class TrailWorkDay(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    ridetime = models.DateTimeField()
    postRideBeer = models.CharField('Post Ride Beer-Food', max_length=100)
    objects = models.GeoManager()


class BikeSwap(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    ridetime = models.DateTimeField()
    objects = models.GeoManager()


class Conference(models.Model):
    location = models.ForeignKey(RideLocation)
    riders = models.ManyToManyField(User)
    non_member_riders = models.ManyToManyField(NonMembers)
    hostedBy = models.CharField(max_length=50, null=True)
    locationAddress = models.CharField(max_length=50, null=True)
    description = models.CharField(max_length=300, null=False)
    cost = models.CharField(max_length=50, null=True)
    ridetime = models.DateTimeField()
    website = models.CharField(max_length=100, null=True)
    objects = models.GeoManager()



