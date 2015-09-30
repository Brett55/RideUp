# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0014_auto_20141127_0008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'RACE', b'RACE'), (b'GROUP_RIDE', b'Group Ride'), (b'TRAIL_WORK DAY', b'Trail Work Day'), (b'BIKE_SWAP', b'Bike Swap'), (b'SPECIAL_EVENT', b'Special Event'), (b'CONFERENCE', b'Conference')]),
            preserve_default=True,
        ),
    ]
