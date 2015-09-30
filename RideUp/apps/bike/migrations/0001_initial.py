# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ride',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('rideTypeMTB', models.CharField(max_length=100, verbose_name=b'Downhill/XC/Freeride')),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('roadOrDirt', models.CharField(max_length=100, verbose_name=b'Road or Dirt')),
                ('rideLevel', models.CharField(max_length=100, verbose_name=b'Ride Difficulty')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='RideLocation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='ride',
            name='location',
            field=models.ForeignKey(to='RideUp.apps.bike.RideLocation'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='ride',
            name='riders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
    ]
