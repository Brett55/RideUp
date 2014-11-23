# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0003_auto_20141117_1608'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='rideLevel',
            field=models.CharField(max_length=20, verbose_name=b'Ride Difficulty', choices=[(b'GREEN', b'Green'), (b'BLUE', b'Blue'), (b'BLACK', b'Black'), (b'DBL_BLACK', b'Double Black')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='ridetime',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='roadOrDirt',
            field=models.CharField(max_length=4, verbose_name=b'Road or Dirt', choices=[(b'DIRT', b'Dirt'), (b'ROAD', b'Road')]),
            preserve_default=True,
        ),
    ]
