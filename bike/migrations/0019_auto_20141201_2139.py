# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bike', '0018_auto_20141201_1802'),
    ]

    operations = [
        migrations.CreateModel(
            name='RoadRace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hostedBy', models.CharField(max_length=50, null=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50, null=True)),
                ('ridetime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100, null=True)),
                ('postRideBeer', models.CharField(max_length=100, verbose_name=b'Post Ride Beer-Food')),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TrailRace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('rideTypeMTB', models.CharField(max_length=2, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')])),
                ('hostedBy', models.CharField(max_length=50, null=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50, null=True)),
                ('ridetime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100, null=True)),
                ('postRideBeer', models.CharField(max_length=100, verbose_name=b'Post Ride Beer-Food')),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='race',
            name='location',
        ),
        migrations.RemoveField(
            model_name='race',
            name='riders',
        ),
        migrations.DeleteModel(
            name='Race',
        ),
    ]
