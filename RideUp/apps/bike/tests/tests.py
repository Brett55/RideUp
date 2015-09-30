from random import randint

from django.test import TestCase
from django.contrib.gis.geos import Point
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import django

from RideUp.apps.bike import RideLocation

django.setup()


class MainTest(TestCase):
    """test basic parts of the main page to ensure elements are present"""

    def setUp(self):
        self.browser = webdriver.Firefox()

        # user opens web browser, navigates to home page
        self.browser.get("localhost:8000/")
        # close initial popup
        self.browser.find_element_by_css_selector('.btn-primary').click()

        # assert proper HTML is displayed
        body = self.browser.find_element_by_tag_name('body')
        self.assertIn('Ride[up]:', body.text)

    def tearDown(self):
        self.browser.quit()

    def check_exists_by_xpath(self, xpath):
        try:
            self.browser.find_element_by_xpath(xpath)
        except NoSuchElementException:
            return False
        return True

    def test_main_site(self):

        self.setUp()

        # assert about section is modal window
        result = self.browser.find_element_by_css_selector("#about")
        result.click()

        # assert proper HTML is displayed
        self.browser.implicitly_wait(1)
        popup = self.browser.find_element_by_css_selector(".navText")
        self.assertIn('concept', popup.text)
        # close popup
        self.browser.find_element_by_css_selector('.btn-primary').click()

        # assert memberes section is modal window
        result = self.browser.find_element_by_css_selector("#members")
        result.click()

        # assert proper HTML is displayed
        self.browser.implicitly_wait(1)
        popup = self.browser.find_elements_by_css_selector(".navText")
        self.assertIn('Becoming', popup[0].text)
        # close popup
        self.browser.find_element_by_css_selector('.btn-primary').click()

        # assert HowTo section is modal window
        result = self.browser.find_element_by_css_selector("#howTo")
        result.click()

        # assert proper HTML is displayed
        self.browser.implicitly_wait(1)
        popup = self.browser.find_elements_by_css_selector(".navText")
        self.assertIn('Simply', popup[0].text)
        # close popup
        self.browser.find_element_by_css_selector('.btn-primary').click()


class CheckRideDetailsandJoin(TestCase):
    '''test the ability to view ride details, and join the ride'''

    def setUp(self):
        self.browser = webdriver.Firefox()

        # user opens web browser, navigates to home page
        self.browser.get("localhost:8000/")
        # close initial popup
        self.browser.find_element_by_css_selector('.btn-primary').click()

        # assert proper HTML is displayed
        body = self.browser.find_element_by_tag_name('body')
        self.assertIn('Ride[up]:', body.text)

    def tearDown(self):
        self.browser.quit()

    def check_exists_by_xpath(self, xpath):
        try:
            self.browser.find_element_by_xpath(xpath)
        except NoSuchElementException:
            return False
        return True

    def test_view_riders(self):

        self.setUp()

        # ride details
        result = self.browser.find_element_by_xpath("/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div[3]/div[4]/i")
        result.click()

        try:
            result_modal = WebDriverWait(self.browser, 1).until(
                EC.presence_of_element_located((By.CLASS_NAME, "modal-title"))
            )
            self.browser.implicitly_wait(1)

        finally:
            self.assertIn('Details', result_modal.get_attribute("textContent"))


        # view non members
        self.browser.find_element_by_css_selector('#getRiderInfoLinkNonMember').click()
        self.assertTrue(self.check_exists_by_xpath('/html/body/div[2]/div[2]/div/div[2]/div/table[2]/tbody'))

        self.browser.implicitly_wait(1)

        # view members
        self.browser.find_element_by_css_selector('#getRiderInfoLinkMember').click()
        self.assertTrue(self.check_exists_by_xpath('/html/body/div[2]/div[2]/div/div[2]/div/table[2]/tbody'))

        self.browser.implicitly_wait(1)


    def test_join_ride(self):

        # ride details
        result = self.browser.find_element_by_xpath("/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div[3]/div[4]/i")
        result.click()
        self.browser.implicitly_wait(1)

        # send form data
        self.browser.find_element_by_css_selector('#joinRideButton').click()
        self.browser.find_element_by_css_selector('#id_first_name').send_keys("NewMemberBobbyHill")
        self.browser.find_element_by_css_selector('#submitJoinRideForm').click()

        # on success of POST, check to make sure it worked
        success = WebDriverWait(self.browser, 1).until(
            EC.presence_of_element_located((By.XPATH, "/html/body/div[2]/div[2]/div/div[2]/div/p"))
        )
        self.assertIn('Success!', success.get_attribute("textContent"))

        self.browser.find_element_by_xpath('/html/body/div[2]/div[1]').click()

        # check member form submission now
        result = self.browser.find_element_by_xpath("/html/body/div/div[2]/div/div[1]/div[1]/div[2]/div[3]/div[4]/i")
        result.click()
        self.browser.find_element_by_css_selector('#joinRideButton').click()
        self.browser.implicitly_wait(1)
        self.browser.find_element_by_css_selector('#memberJoinButton').click()

        self.browser.find_element_by_css_selector('#id_first_name').send_keys("NewMemberDaleGribble")
        self.browser.implicitly_wait(1)

        # generate fake username and send
        self.browser.find_element_by_css_selector('#id_username').send_keys("myCoolUserName" +
                                                                            str(randint(0, 9) * randint(0, 9)
                                                                                * randint(0, 9)))
        self.browser.implicitly_wait(1)

        # send password and submit form
        self.browser.find_element_by_css_selector('#id_password').send_keys("blah1234")
        self.browser.implicitly_wait(1)
        self.browser.find_element_by_css_selector('#submitJoinRideForm').click()


class GroupRideDirtTestCase(TestCase):
    '''tests the creation of objects in DB'''

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