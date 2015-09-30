# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0040_auto_20150126_1456'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bikeswap',
            name='locationAddress',
        ),
        migrations.RemoveField(
            model_name='conference',
            name='locationAddress',
        ),
        migrations.RemoveField(
            model_name='ridespecialevent',
            name='locationAddress',
        ),
        migrations.RemoveField(
            model_name='roadrace',
            name='locationAddress',
        ),
        migrations.RemoveField(
            model_name='trailrace',
            name='locationAddress',
        ),
        migrations.RemoveField(
            model_name='trailrace',
            name='rideTypeMTB',
        ),
        migrations.RemoveField(
            model_name='trailworkday',
            name='locationAddress',
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='cost',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2015, 2, 26, 1, 11, 42, 712353), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='website',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2015, 2, 26, 1, 11, 44, 674188), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='cost',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='description',
            field=models.CharField(default=datetime.datetime(2015, 2, 26, 1, 11, 46, 761655), max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='website',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='cost',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='description',
            field=models.CharField(default=datetime.datetime(2015, 2, 26, 1, 11, 48, 661980), max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='website',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='ridespecialevent',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2015, 2, 26, 1, 11, 50, 312404), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='cost',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='website',
            field=models.CharField(max_length=100, null=True),
            preserve_default=True,
        ),
    ]
