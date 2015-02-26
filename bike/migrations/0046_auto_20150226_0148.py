# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0045_auto_20150226_0147'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikeswap',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='ridetime',
            field=models.DateTimeField(verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
    ]
