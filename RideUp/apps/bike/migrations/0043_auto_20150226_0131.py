# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0042_auto_20150226_0123'),
    ]

    operations = [
        migrations.AddField(
            model_name='bikeswap',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='ridespecialevent',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='roadrace',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailrace',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
    ]
