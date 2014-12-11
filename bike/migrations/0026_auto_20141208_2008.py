# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0025_auto_20141205_2115'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupridedirt',
            name='rideLevelTrail',
            field=models.CharField(max_length=20, null=True, verbose_name=b'MTB Ride Difficulty', choices=[(b'Green', b'Green'), (b'Blue', b'Blue'), (b'Black', b'Black'), (b'Double Black', b'Double Black')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 8, 20, 8, 12, 42704), verbose_name=b'Ride Time'),
            preserve_default=False,
        ),
    ]
