from rest_framework import serializers
import models


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
    ('ROAD', 'Road')
)

class KickOff(serializers.ModelSerializer):
    coordinates = serializers.CharField(max_length=200, required=True)
    name = serializers.CharField(max_length=100, required=True)
    editable = serializers.CharField(max_length=3)
    event_Frequency = serializers.CharField(label='Event Frequency', max_length=100, required=True)
    rideType = serializers.ChoiceField(label='Type of Event', choices=EVENT_TYPE, required=True, initial='BLANK')
    roadOrDirt = serializers.ChoiceField(label='Trail or Road', choices=SURFACE_CHOICE, required=True)


class JoinRide(serializers.ModelSerializer):
    first_name = serializers.CharField(label='Your Name', max_length=100, required=True)
    username = serializers.CharField(label='Username', max_length=100, required=True)
    password = serializers.CharField(label='Password', max_length=100, required=True)


class JoinRideNonMember(serializers.ModelSerializer):
    first_name = serializers.CharField(label='Your Name', max_length=100, required=True)


class AddRideSpotTrail(serializers.ModelSerializer):
    class Meta:
        model = models.GroupRideDirt
        fields = ('ridetime', 'rideTypeMTB', 'rideLevelTrail', 'postRideBeer')


class AddRideSpotRoad(serializers.ModelSerializer):
    class Meta:
        model = models.GroupRideRoad
        fields = ('ridetime', 'postRideBeer', 'rideLevelRoad')


class RideSpecialEvent(serializers.ModelSerializer):
    class Meta:
        model = models.RideSpecialEvent
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer', 'hostedBy', 'cost', 'website')


class TrailRace(serializers.ModelSerializer):
    class Meta:
        model = models.TrailRace
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer',
                  'hostedBy', 'cost', 'website', 'rideTypeMTB')


class RoadRace(serializers.ModelSerializer):
    class Meta:
        model = models.RoadRace
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer', 'hostedBy', 'cost', 'website')


class TrailWorkDay(serializers.ModelSerializer):
    class Meta:
        model = models.TrailWorkDay
        fields = ('ridetime', 'locationAddress', 'description', 'postRideBeer')


class BikeSwap(serializers.ModelSerializer):
    class Meta:
        model = models.BikeSwap
        fields = ('ridetime', 'locationAddress', 'description')


class Conference(serializers.ModelSerializer):
    class Meta:
        model = models.Conference
        fields = ('ridetime', 'locationAddress', 'description')