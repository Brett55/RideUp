# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0005_auto_20141122_1051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='ridetime',
            field=models.DateTimeField(null=True),
            preserve_default=True,
        ),
    ]
