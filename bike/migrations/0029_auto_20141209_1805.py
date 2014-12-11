# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0028_auto_20141209_1746'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridelocation',
            old_name='_rideType',
            new_name='rideType',
        ),
    ]
