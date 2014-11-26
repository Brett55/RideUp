# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings
import datetime


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('bike', '0006_auto_20141122_2348'),
    ]

    operations = [
        migrations.CreateModel(
            name='RideEvent',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('eventType', models.CharField(max_length=50, null=True, choices=[(b'RACE', b'Race'), (b'TRAIL WORK DAY', b'Trail Work Day'), (b'BIKE SWAP', b'Bike Swap'), (b'LARGE GROUP RIDE', b'Large Group Ride'), (b'SPECIAL EVENT', b'Special Event'), (b'CONFERENCE', b'Conference')])),
                ('hostedBy', models.CharField(max_length=50)),
                ('locationAddress', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=300)),
                ('cost', models.CharField(max_length=50)),
                ('eventTime', models.DateTimeField(null=True)),
                ('website', models.CharField(max_length=100)),
                ('location', models.ForeignKey(to='bike.RideLocation')),
                ('riders', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='ridelocation',
            name='rideType',
            field=models.CharField(default=datetime.datetime(2014, 11, 25, 23, 42, 0, 557808), max_length=50, verbose_name=b'Type of Ride/Event'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='ride',
            name='rideLevel',
            field=models.CharField(max_length=20, null=True, verbose_name=b'Ride Difficulty', choices=[(b'GREEN', b'Green'), (b'BLUE', b'Blue'), (b'BLACK', b'Black'), (b'DBL_BLACK', b'Double Black')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='rideTypeMTB',
            field=models.CharField(max_length=2, null=True, verbose_name=b'Downhill/XC/Freeride', choices=[(b'XC', b'Cross Country'), (b'DH', b'Down Hill'), (b'FR', b'Free Ride'), (b'DJ', b'Dirt Jump')]),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ride',
            name='ridetime',
            field=models.DateTimeField(null=True, verbose_name=b'Ride Time'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='ridelocation',
            name='name',
            field=models.CharField(max_length=50, verbose_name=b'Ride Spot/Event'),
            preserve_default=True,
        ),
    ]
