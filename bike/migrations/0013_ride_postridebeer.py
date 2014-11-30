# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0012_auto_20141127_0004'),
    ]

    operations = [
        migrations.AddField(
            model_name='ride',
            name='postRideBeer',
            field=models.CharField(default=datetime.datetime(2014, 11, 27, 0, 6, 32, 224172), max_length=100, verbose_name=b'Post Ride Beer-Food'),
            preserve_default=False,
        ),
    ]
