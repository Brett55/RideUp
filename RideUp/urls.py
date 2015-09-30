from django.conf.urls import url, include
from django.contrib.gis import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('RideUp.apps.bike.urls', namespace="bike"))
]