# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0037_auto_20141211_1630'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='grouprideroad',
            name='rideTypeMTB',
        ),
        migrations.AddField(
            model_name='ridelocation',
            name='event_Frequency',
            field=models.CharField(default=datetime.datetime(2015, 1, 7, 0, 1, 27, 843020), max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'Weekly', b'Weekly'), (b'Bi-Weekly', b'Bi-Weekly'), (b'One Time for Now', b'One Time for Now')]),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='rideLevelRoad',
            field=models.CharField(max_length=20, null=True, verbose_name=b'Road Ride Difficulty', choices=[(b'Group A', b'Group A'), (b'Group B', b'Group B'), (b'Group C', b'Group C'), (b'Group D', b'Group D')]),
            preserve_default=True,
        ),
    ]
