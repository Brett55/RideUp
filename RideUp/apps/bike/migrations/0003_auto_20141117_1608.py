# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0002_auto_20141117_1602'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='rideLevel',
            field=models.CharField(max_length=20, verbose_name=b'Ride Difficulty', choices=[(b'GREEN', b'Green'), (b'BLUE', b'Blue'), (b'BLACK', b'Black'), (b'DOUBLE BLACK', b'Double Black')]),
            preserve_default=True,
        ),
    ]
