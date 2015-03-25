from django.test import TestCase
from bike.models import RideLocation
from django.contrib.gis.geos import Point
import django
django.setup()

class GroupRideDirtTestCase(TestCase):
    def setUp(self):
        RideLocation.objects.create(
            name = "test",
            event_Frequency = "Weekly",
            editable = "yes",
            rideType = "SPECIAL_EVENT",
            roadOrDirt = "TRAIL",
            geom = Point(112.32132, 34.24323)
        )

    def test_making_ride_point(self):
        """test making of a single ride event"""
        group_ride_one = RideLocation.objects.get(name="test")
        self.assertEqual(group_ride_one.name, 'test')




