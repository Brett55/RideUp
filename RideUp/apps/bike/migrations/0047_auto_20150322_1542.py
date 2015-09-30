# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0046_auto_20150226_0148'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikeswap',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='rideLevelTrail',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name=b'MTB Ride Difficulty', choices=[(b'Green', b'Green'), (b'Blue', b'Blue'), (b'Black', b'Black'), (b'Double Black', b'Double Black')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='postRideBeer',
            field=models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='rideTypeMTB',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
    ]
