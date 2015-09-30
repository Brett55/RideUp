# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0010_auto_20141126_1926'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bikeswap',
            old_name='eventTime',
            new_name='ridetime',
        ),
        migrations.RenameField(
            model_name='conference',
            old_name='eventTime',
            new_name='ridetime',
        ),
        migrations.RenameField(
            model_name='race',
            old_name='eventTime',
            new_name='ridetime',
        ),
        migrations.RenameField(
            model_name='ridespecialevent',
            old_name='eventTime',
            new_name='ridetime',
        ),
        migrations.RenameField(
            model_name='trailworkday',
            old_name='eventTime',
            new_name='ridetime',
        ),
    ]
