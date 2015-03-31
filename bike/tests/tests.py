from django.test import TestCase, LiveServerTestCase
from bike.models import RideLocation
from django.contrib.gis.geos import Point
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import django

django.setup()


class AdminTest(LiveServerTestCase):
    # load fixtures
    fixtures = ['admin.json']

    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_admin_site(self):
        # user opens web browser, navigates to admin page
        self.browser.get(self.live_server_url)
        body = self.browser.find_element_by_tag_name('body')
        self.assertIn('Ride[up]:', body.text)


class GroupRideDirtTestCase(TestCase):
    def setUp(self):
        RideLocation.objects.create(
            name="test",
            event_Frequency="Weekly",
            editable="yes",
            rideType="SPECIAL_EVENT",
            roadOrDirt="TRAIL",
            geom=Point(112.32132, 34.24323)
        )

    def test_making_ride_point(self):
        """test making of a single ride event"""
        group_ride_one = RideLocation.objects.get(name="test")
        self.assertEqual(group_ride_one.name, 'test')






