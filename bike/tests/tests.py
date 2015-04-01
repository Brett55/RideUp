from django.test import TestCase
from bike.models import RideLocation
from django.contrib.gis.geos import Point
from selenium import webdriver
import django
django.setup()


class MainTest(TestCase):
    def setUp(self):
        self.browser = webdriver.Firefox()

    def tearDown(self):
        self.browser.quit()

    def test_main_site(self):
        # user opens web browser, navigates to home page
        self.browser.get("localhost:8000/")
        # close initial popup
        self.browser.find_element_by_css_selector('.btn-primary').click()

        # assert proper HTML is displayed
        body = self.browser.find_element_by_tag_name('body')
        self.assertIn('Ride[up]:', body.text)

        # assert about section is modal window
        result = self.browser.find_element_by_css_selector("#about")
        result.click()

        # assert proper HTML is displayed
        popup = self.browser.find_element_by_css_selector(".navText")
        self.assertIn('concept', popup.text)


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






