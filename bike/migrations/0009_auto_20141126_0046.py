# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0008_auto_20141126_0019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='rideevent',
            name='eventTime',
            field=models.DateTimeField(default=datetime.datetime(2014, 11, 26, 0, 46, 52, 333366)),
            preserve_default=False,
        ),
    ]
