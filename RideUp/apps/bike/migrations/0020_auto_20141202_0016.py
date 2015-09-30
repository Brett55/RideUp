# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0019_auto_20141201_2139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'race_road', b'Road Race'), (b'group_ride_trail', b'Group Ride Dirt'), (b'group_ride_road', b'Group Ride Road'), (b'special_event', b'Special Event'), (b'race_trail', b'Trail Race'), (b'trail_work_day', b'Trail Work'), (b'conference', b'Conference'), (b'bike_swap', b'Bike Swap')]),
            preserve_default=True,
        ),
    ]
