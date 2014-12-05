# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0021_auto_20141202_2320'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ridelocation',
            old_name='surfaceType',
            new_name='roadOrDirt',
        ),
    ]
