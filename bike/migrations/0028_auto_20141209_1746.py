# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0027_auto_20141209_1735'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridelocation',
            old_name='rideType',
            new_name='_rideType',
        ),
    ]
