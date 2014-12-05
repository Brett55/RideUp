# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0020_auto_20141202_0016'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ridespecialevent',
            name='roadOrDirt',
        ),
        migrations.AddField(
            model_name='ridelocation',
            name='surfaceType',
            field=models.CharField(default=datetime.datetime(2014, 12, 2, 23, 20, 1, 807987), max_length=50, verbose_name=b'Surface Type', choices=[(b'DIRT', b'Trail'), (b'ROAD', b'Road')]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'BLANK', b'Select Type'), (b'RACE', b'Race'), (b'GROUP_RIDE', b'Group Ride'), (b'SPECIAL_EVENT', b'Special Event'), (b'TRAIL_WORK_DAY', b'Trail Work'), (b'CONFERENCE', b'Conference'), (b'BIKE_SWAP', b'Bike Swap')]),
            preserve_default=True,
        ),
    ]
