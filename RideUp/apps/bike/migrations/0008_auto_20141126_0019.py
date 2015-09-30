# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0007_auto_20141125_2342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rideevent',
            name='cost',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='rideevent',
            name='eventType',
            field=models.CharField(default=datetime.datetime(2014, 11, 26, 0, 19, 40, 985629), max_length=50, choices=[(b'RACE', b'Race'), (b'TRAIL WORK DAY', b'Trail Work Day'), (b'BIKE SWAP', b'Bike Swap'), (b'LARGE GROUP RIDE', b'Large Group Ride'), (b'SPECIAL EVENT', b'Special Event'), (b'CONFERENCE', b'Conference')]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='rideevent',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='rideevent',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='rideevent',
            name='website',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
    ]
