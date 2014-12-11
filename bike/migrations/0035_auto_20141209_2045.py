# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0034_auto_20141209_1912'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bikeswap',
            old_name='_ridetime',
            new_name='ridetime',
        ),
        migrations.AlterField(
            model_name='conference',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 20, 45, 22, 242840)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='ridetime',
            field=models.DateTimeField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 20, 45, 33, 833770)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 20, 45, 37, 904604)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 20, 45, 42, 82637)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 20, 45, 47, 82546)),
            preserve_default=False,
        ),
    ]
