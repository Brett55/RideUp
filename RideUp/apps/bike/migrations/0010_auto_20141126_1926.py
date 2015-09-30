# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bike', '0009_auto_20141126_0046'),
    ]

    operations = [
        migrations.CreateModel(
            name='BikeSwap',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('eventTime', models.DateTimeField(null=True)),
                ('location', models.ForeignKey(to='RideUp.apps.bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Conference',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hostedBy', models.CharField(max_length=50, null=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50, null=True)),
                ('eventTime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100, null=True)),
                ('location', models.ForeignKey(to='RideUp.apps.bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Race',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('roadOrDirt', models.CharField(max_length=4, verbose_name=b'Road or Dirt', choices=[(b'DIRT', b'Dirt'), (b'ROAD', b'Road')])),
                ('rideTypeMTB', models.CharField(max_length=2, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')])),
                ('hostedBy', models.CharField(max_length=50, null=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50, null=True)),
                ('eventTime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100, null=True)),
                ('location', models.ForeignKey(to='RideUp.apps.bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='RideSpecialEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('roadOrDirt', models.CharField(max_length=4, verbose_name=b'Road or Dirt', choices=[(b'DIRT', b'Dirt'), (b'ROAD', b'Road')])),
                ('hostedBy', models.CharField(max_length=50, null=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50, null=True)),
                ('eventTime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100, null=True)),
                ('location', models.ForeignKey(to='RideUp.apps.bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TrailWorkDay',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('locationAddress', models.CharField(max_length=50, null=True)),
                ('description', models.CharField(max_length=300)),
                ('eventTime', models.DateTimeField()),
                ('location', models.ForeignKey(to='RideUp.apps.bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='rideevent',
            name='location',
        ),
        migrations.RemoveField(
            model_name='rideevent',
            name='riders',
        ),
        migrations.DeleteModel(
            name='RideEvent',
        ),
        migrations.AlterField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'RACE', b'RACE'), (b'GROUP RIDE', b'Group Ride'), (b'TRAIL WORK DAY', b'Trail Work Day'), (b'BIKE SWAP', b'Bike Swap'), (b'SPECIAL EVENT', b'Special Event'), (b'CONFERENCE', b'Conference')]),
            preserve_default=True,
        ),
    ]
