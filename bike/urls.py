from django.conf.urls import patterns, url
from djgeojson.views import GeoJSONLayerView
from models import RideLocation
from django.views.generic import TemplateView

from bike import views

urlpatterns = patterns('',
	url(r'^(?P<pk>\d+)/$','bike.views.moreData', name='data'),
	url(r'^data.geojson/$',GeoJSONLayerView.as_view(model=RideLocation), name='data'),
    url(r'^add_point/$', 'bike.views.add_point'),
    url(r'^add_point/error/$', 'bike.views.form_error'),
    url(r'^add_point/success/$', 'bike.views.form_success'),
)
