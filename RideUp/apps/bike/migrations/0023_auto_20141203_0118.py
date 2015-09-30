# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0022_auto_20141202_2322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ridelocation',
            name='roadOrDirt',
            field=models.CharField(max_length=50, verbose_name=b'Surface Type', choices=[(b'TRAIL', b'Trail'), (b'ROAD', b'Road')]),
            preserve_default=True,
        ),
    ]
