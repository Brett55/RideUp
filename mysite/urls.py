from django.conf.urls import url, include
from django.contrib.gis import admin

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'', include('bike.urls', namespace="bike"))
]