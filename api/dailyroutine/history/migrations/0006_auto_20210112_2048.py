# Generated by Django 3.1.4 on 2021-01-12 13:48

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0005_auto_20210111_2010'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='date',
        ),
        migrations.RemoveField(
            model_name='history',
            name='time',
        ),
        migrations.AlterField(
            model_name='history',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2021, 1, 12, 13, 48, 45, 35827, tzinfo=utc)),
        ),
    ]
