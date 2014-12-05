# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0024_auto_20141205_2109'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupridedirt',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='rideTypeMTB',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')]),
            preserve_default=True,
        ),
    ]
