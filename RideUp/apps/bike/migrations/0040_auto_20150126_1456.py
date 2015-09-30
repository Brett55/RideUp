# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0039_ridelocation_editable'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ridelocation',
            name='editable',
            field=models.CharField(max_length=3),
            preserve_default=True,
        ),
    ]
