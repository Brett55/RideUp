# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0038_auto_20150107_0001'),
    ]

    operations = [
        migrations.AddField(
            model_name='ridelocation',
            name='editable',
            field=models.BooleanField(default=False),
            preserve_default=True,
        ),
    ]
