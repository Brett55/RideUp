# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0026_auto_20141208_2008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikeswap',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 12, 9, 17, 35, 48, 982804)),
            preserve_default=False,
        ),
    ]
