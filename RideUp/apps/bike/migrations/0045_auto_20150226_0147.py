# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0044_auto_20150226_0137'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikeswap',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address'),
            preserve_default=True,
        ),
    ]
