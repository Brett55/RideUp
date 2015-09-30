# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0031_remove_ridelocation__ridetype'),
    ]

    operations = [
        migrations.AddField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(default=datetime.datetime(2014, 12, 9, 18, 36, 41, 456405), max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'BLANK', b'Select Type'), (b'RACE', b'Race'), (b'GROUP_RIDE', b'Group Ride'), (b'SPECIAL_EVENT', b'Special Event'), (b'TRAIL_WORK_DAY', b'Trail Work'), (b'CONFERENCE', b'Conference'), (b'BIKE_SWAP', b'Bike Swap')]),
            preserve_default=False,
        ),
    ]
