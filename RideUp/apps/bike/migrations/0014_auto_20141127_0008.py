# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0013_ride_postridebeer'),
    ]

    operations = [
        migrations.AddField(
            model_name='race',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2014, 11, 27, 0, 8, 21, 37365), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2014, 11, 27, 0, 8, 26, 8191), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
    ]
