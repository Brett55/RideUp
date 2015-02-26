# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0043_auto_20150226_0131'),
    ]

    operations = [
        migrations.AddField(
            model_name='bikeswap',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True),
            preserve_default=True,
        ),
    ]
