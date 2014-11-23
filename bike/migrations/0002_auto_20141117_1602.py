# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='rideTypeMTB',
            field=models.CharField(max_length=2, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='ridetime',
            field=models.DateTimeField(auto_now=True, verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='roadOrDirt',
            field=models.CharField(max_length=4, verbose_name=b'Road or Dirt', choices=[(b'Dirt', b'Dirt'), (b'Road', b'Road')]),
            preserve_default=True,
        ),
    ]
