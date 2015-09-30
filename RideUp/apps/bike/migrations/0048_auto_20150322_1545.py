# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0047_auto_20150322_1542'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bikeswap',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='bikeswap',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='conference',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='groupridedirt',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='rideLevelRoad',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name=b'Road Ride Difficulty', choices=[(b'Group A', b'Group A'), (b'Group B', b'Group B'), (b'Group C', b'Group C'), (b'Group D', b'Group D')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='grouprideroad',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridespecialevent',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='roadrace',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailrace',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='cost',
            field=models.CharField(max_length=50, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='description',
            field=models.CharField(max_length=300, null=True, blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='hostedBy',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='locationAddress',
            field=models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='trailworkday',
            name='website',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
    ]
