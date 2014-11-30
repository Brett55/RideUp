# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0011_auto_20141126_1935'),
    ]

    operations = [
        migrations.AddField(
            model_name='ride',
            name='roadPace',
            field=models.CharField(max_length=20, null=True, verbose_name=b'Road Ride Difficulty', choices=[(b'10MPH', b'10Mph'), (b'15MPH', b'15Mph'), (b'20MPH', b'20Mph'), (b'25MPH', b'25Mph')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='rideLevel',
            field=models.CharField(max_length=20, null=True, verbose_name=b'MTB Ride Difficulty', choices=[(b'GREEN', b'Green'), (b'BLUE', b'Blue'), (b'BLACK', b'Black'), (b'DBL_BLACK', b'Double Black')]),
            preserve_default=True,
        ),
    ]
