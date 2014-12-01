from django.contrib.gis import admin
from django.contrib.gis.admin import OSMGeoAdmin
from models import RideLocation, GroupRideDirt
 
class RideInline(admin.TabularInline):
    model = GroupRideDirt
    extra = 3
 
class RideLocationAdmin(OSMGeoAdmin):
    inlines = [RideInline]
 
admin.site.register(RideLocation, RideLocationAdmin)