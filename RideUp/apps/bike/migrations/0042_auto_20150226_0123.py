# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0041_auto_20150226_0111'),
    ]

    operations = [
        migrations.AddField(
            model_name='bikeswap',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='ridespecialevent',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='roadrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
    ]
