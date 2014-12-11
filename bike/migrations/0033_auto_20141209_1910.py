# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0032_ridelocation_ridetype'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridelocation',
            old_name='rideType',
            new_name='_rideType',
        ),
    ]
