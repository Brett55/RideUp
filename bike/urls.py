from django.conf.urls import patterns, url
from djgeojson.views import GeoJSONLayerView
from models import RideLocation


urlpatterns = patterns('',
                       url(r'^(?P<key>\d+)/$', 'bike.views.more_data', name='moreData'),
                       url(r'^form/(?P<form_type>\w+)/$', 'bike.views.form_updater', name='formUpdate'),
                       url(r'^data.geojson/$', GeoJSONLayerView.as_view(model=RideLocation,
                                                                        properties=('rideType', 'name'))),
                       url(r'^index/$', 'bike.views.index'),
                       url(r'^group_ride_trail/$', 'bike.views.group_ride_trail'),
                       url(r'^group_ride_road/$', 'bike.views.group_ride_road'),
                       url(r'^race_trail/$', 'bike.views.race_trail'),
                       url(r'^race_road/$', 'bike.views.race_road'),
                       url(r'^special_event/$', 'bike.views.special_event'),
                       url(r'^trail_work_day/$', 'bike.views.trail_work_day'),
                       url(r'^bike_swap/$', 'bike.views.bike_swap'),
                       url(r'^conference/$', 'bike.views.conference'),

                       url(r'^add_point/error/$', 'bike.views.form_error'),
                       url(r'^add_point/success/$', 'bike.views.form_success'),
)
