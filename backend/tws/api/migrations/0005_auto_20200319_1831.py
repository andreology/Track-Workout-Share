# Generated by Django 3.0.3 on 2020-03-20 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_profile_accounttype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='accountType',
            field=models.CharField(choices=[('private', 'private'), ('public', 'public')], default='private', max_length=10),
        ),
    ]
