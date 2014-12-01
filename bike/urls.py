from django.conf.urls import patterns, url
from djgeojson.views import GeoJSONLayerView
from models import RideLocation


urlpatterns = patterns('',
                       url(r'^(?P<pk>\d+)/$', 'bike.views.moreData', name='data'),
                       url(r'^form/(?P<type>\w+)/$', 'bike.views.form_updater'),
                       url(r'^data.geojson/$', GeoJSONLayerView.as_view(model=RideLocation, properties=('name'))),


                       url(r'^index/$', 'bike.views.index'),
                       url(r'^group_ride_trail/$', 'bike.views.group_ride_trail'),


                       url(r'^add_point/error/$', 'bike.views.form_error'),
                       url(r'^add_point/success/$', 'bike.views.form_success'),
)
