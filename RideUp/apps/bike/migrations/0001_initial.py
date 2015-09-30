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
            name='BikeSwap',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Conference',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='GroupRideDirt',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('rideLevelTrail', models.CharField(blank=True, max_length=20, null=True, verbose_name=b'MTB Ride Difficulty', choices=[(b'Green', b'Green'), (b'Blue', b'Blue'), (b'Black', b'Black'), (b'Double Black', b'Double Black')])),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='GroupRideRoad',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('rideLevelRoad', models.CharField(blank=True, max_length=20, null=True, verbose_name=b'Road Ride Difficulty', choices=[(b'Group A', b'Group A'), (b'Group B', b'Group B'), (b'Group C', b'Group C'), (b'Group D', b'Group D')])),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='NonMembers',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='RideLocation',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50, verbose_name=b'Ride Spot/Event')),
                ('event_Frequency', models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'Weekly', b'Weekly'), (b'Bi-Weekly', b'Bi-Weekly'), (b'One Time for Now', b'One Time for Now')])),
                ('editable', models.CharField(max_length=3)),
                ('rideType', models.CharField(max_length=50, verbose_name=b'Type of Ride/Event', choices=[(b'BLANK', b'Select Type'), (b'RACE', b'Race'), (b'GROUP_RIDE', b'Group Ride'), (b'SPECIAL_EVENT', b'Special Event'), (b'TRAIL_WORK_DAY', b'Trail Work'), (b'CONFERENCE', b'Conference'), (b'BIKE_SWAP', b'Bike Swap')])),
                ('roadOrDirt', models.CharField(max_length=50, verbose_name=b'Surface Type', choices=[(b'TRAIL', b'Trail'), (b'ROAD', b'Road')])),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=4326)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='RideSpecialEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('non_member_riders', models.ManyToManyField(to='bike.NonMembers')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='RoadRace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('non_member_riders', models.ManyToManyField(to='bike.NonMembers')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TrailRace',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('non_member_riders', models.ManyToManyField(to='bike.NonMembers')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='TrailWorkDay',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('ridetime', models.DateTimeField(verbose_name=b'Ride Time')),
                ('postRideBeer', models.CharField(max_length=100, null=True, verbose_name=b'Post Ride Beer-Food', blank=True)),
                ('website', models.CharField(max_length=100, null=True, blank=True)),
                ('cost', models.CharField(max_length=50, null=True, blank=True)),
                ('rideTypeMTB', models.CharField(blank=True, max_length=50, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'Cross Country', b'Cross Country'), (b'Down Hill', b'Down Hill'), (b'Free Ride', b'Free Ride'), (b'Dirt Jump', b'Dirt Jump')])),
                ('description', models.CharField(max_length=300, null=True, blank=True)),
                ('hostedBy', models.CharField(max_length=50, null=True, verbose_name=b'Hosted By', blank=True)),
                ('locationAddress', models.CharField(max_length=50, null=True, verbose_name=b'Location Address', blank=True)),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('non_member_riders', models.ManyToManyField(to='bike.NonMembers')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='location',
            field=models.ForeignKey(to='bike.RideLocation'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='non_member_riders',
            field=models.ManyToManyField(to='bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='riders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='location',
            field=models.ForeignKey(to='bike.RideLocation'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='non_member_riders',
            field=models.ManyToManyField(to='bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='riders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='location',
            field=models.ForeignKey(to='bike.RideLocation'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='non_member_riders',
            field=models.ManyToManyField(to='bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='conference',
            name='riders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='location',
            field=models.ForeignKey(to='bike.RideLocation'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='non_member_riders',
            field=models.ManyToManyField(to='bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bikeswap',
            name='riders',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
            preserve_default=True,
        ),
    ]
