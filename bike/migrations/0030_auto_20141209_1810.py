# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0029_auto_20141209_1805'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridelocation',
            old_name='rideType',
            new_name='_rideType',
        ),
    ]
