# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bike', '0035_auto_20141209_2045'),
    ]

    operations = [
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
        migrations.AddField(
            model_name='conference',
            name='non_member_riders',
            field=models.ManyToManyField(to='RideUp.apps.bike.NonMembers'),
            preserve_default=True,
        ),
    ]
