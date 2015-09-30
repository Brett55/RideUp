from django.conf.urls import patterns, url
from djgeojson.views import GeoJSONLayerView
from models import RideLocation

urlpatterns = patterns('',
                       url(r'^riders/(\w+)/$', 'RideUp.apps.bike.views.get_rider_info'),
                       url(r'^add_rider/(\w+)/(\d+)/$', 'RideUp.apps.bike.views.add_rider'),
                       url(r'^update_event/(\w+)/(\d+)/$', 'RideUp.apps.bike.views.update_event'),
                       url(r'^(\w+)/(\d+)/$', 'RideUp.apps.bike.views.more_data'),
                       url(r'^form/(\w+)/$', 'RideUp.apps.bike.views.form_updater'),

                       url(r'^data.geojson/$', GeoJSONLayerView.as_view(
                           model=RideLocation, properties=(
                           'roadOrDirt', 'editable', 'event_Frequency', 'rideType', 'name', 'id')
                            )
                       ),
                       url(r'^$', 'RideUp.apps.bike.views.index'),
                       url(r'^(\w+)/$', 'RideUp.apps.bike.views.create_ride')
)