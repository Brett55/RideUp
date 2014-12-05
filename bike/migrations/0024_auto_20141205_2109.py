# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0023_auto_20141203_0118'),
    ]

    operations = [
        migrations.RenameField(
            model_name='groupridedirt',
            old_name='rideLevel',
            new_name='rideLevelTrail',
        ),
        migrations.RenameField(
            model_name='grouprideroad',
            old_name='rideLevel',
            new_name='rideLevelRoad',
        ),
    ]
