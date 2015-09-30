import os
from django.contrib.gis.utils import LayerMapping
from models import Bike

bike_hud_mapping = {
    'name' : 'Name',
    'point_x' : 'POINT_X',
    'point_y' : 'POINT_Y',
    'geom' : 'POINT',
}

world_shp = os.path.abspath(os.path.join(os.path.dirname(__file__), 'ride_spots/ride_spots.shp'))

def run(verbose=True):
    lm = LayerMapping(Bike, world_shp, bike_hud_mapping,
                      transform=False, encoding='utf-8')

    lm.save(strict=True, verbose=verbose)