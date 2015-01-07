from django.conf.urls import patterns, url
from djgeojson.views import GeoJSONLayerView
from models import RideLocation

urlpatterns = patterns('',
                       url(r'^riders/(\w+)/(\d+)/$', 'bike.views.get_rider_info'),
                       url(r'^add_rider/(\w+)/(\d+)/$', 'bike.views.add_rider'),
                       url(r'^(\w+)/(\d+)/$', 'bike.views.more_data'),
                       url(r'^form/(\w+)/$', 'bike.views.form_updater'),

                       url(r'^data.geojson/$', GeoJSONLayerView.as_view(
                           model=RideLocation, properties=(
                           'roadOrDirt', 'event_Frequency', 'rideType', 'name', 'id')
                            )
                       ),
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
                       url(r'^add_point/success/$', 'bike.views.form_success')
)