# Generated by Django 3.2.8 on 2023-05-05 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0013_auto_20230505_2032'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='email',
            field=models.CharField(max_length=128, null=True),
        ),
        migrations.AddField(
            model_name='userinfo',
            name='phone',
            field=models.CharField(max_length=32, null=True),
        ),
    ]
