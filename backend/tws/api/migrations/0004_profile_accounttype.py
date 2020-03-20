# Generated by Django 3.0.3 on 2020-03-19 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200315_2033'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='accountType',
            field=models.CharField(choices=[(0, 'private'), (1, 'public')], default='private', max_length=10),
        ),
    ]
