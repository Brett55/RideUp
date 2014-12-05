# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bike', '0017_auto_20141130_1948'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupRideDirt',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('rideTypeMTB', models.CharField(max_length=2, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')])),
                ('ridetime', models.DateTimeField(null=True, verbose_name=b'Ride Time')),
                ('rideLevel', models.CharField(max_length=20, null=True, verbose_name=b'MTB Ride Difficulty', choices=[(b'GREEN', b'Green'), (b'BLUE', b'Blue'), (b'BLACK', b'Black'), (b'DBL_BLACK', b'Double Black')])),
                ('postRideBeer', models.CharField(max_length=100, verbose_name=b'Post Ride Beer-Food')),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='GroupRideRoad',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('rideTypeMTB', models.CharField(max_length=2, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')])),
                ('ridetime', models.DateTimeField(null=True, verbose_name=b'Ride Time')),
                ('rideLevel', models.CharField(max_length=20, null=True, verbose_name=b'Road Ride Difficulty', choices=[(b'10MPH', b'10Mph'), (b'15MPH', b'15Mph'), (b'20MPH', b'20Mph'), (b'25MPH', b'25Mph')])),
                ('postRideBeer', models.CharField(max_length=100, verbose_name=b'Post Ride Beer-Food')),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='ride',
            name='location',
        ),
        migrations.RemoveField(
            model_name='ride',
            name='riders',
        ),
        migrations.DeleteModel(
            name='Ride',
        ),
    ]
