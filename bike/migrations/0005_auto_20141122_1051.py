# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0004_auto_20141120_2010'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='ridetime',
            field=models.DateTimeField(default=datetime.datetime(2014, 11, 22, 15, 51, 40, 201369, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
