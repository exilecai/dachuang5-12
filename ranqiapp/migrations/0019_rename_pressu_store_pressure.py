# Generated by Django 3.2.8 on 2023-05-07 09:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0018_store'),
    ]

    operations = [
        migrations.RenameField(
            model_name='store',
            old_name='pressu',
            new_name='pressure',
        ),
    ]
