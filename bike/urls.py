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
                           'roadOrDirt', 'editable', 'event_Frequency', 'rideType', 'name', 'id')
                            )
                       ),
                       url(r'^$', 'bike.views.index'),
                       url(r'^(\w+)/$', 'bike.views.create_ride')
)