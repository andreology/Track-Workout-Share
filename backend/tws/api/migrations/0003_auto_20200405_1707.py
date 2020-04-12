# Generated by Django 3.0.3 on 2020-04-06 00:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_profile_groupid'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedpost',
            name='likes',
            field=models.FloatField(default=0, null=True),
        ),
        migrations.AlterField(
            model_name='feedpost',
            name='caption',
            field=models.CharField(max_length=40, null=True),
        ),
    ]