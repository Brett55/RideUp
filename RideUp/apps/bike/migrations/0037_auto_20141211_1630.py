# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0036_auto_20141211_1622'),
    ]

    operations = [
        migrations.AddField(
            model_name='bikeswap',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='groupridedirt',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='grouprideroad',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='ridespecialevent',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='roadrace',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailrace',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='trailworkday',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
    ]
