# Generated by Django 4.1.6 on 2023-02-19 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0002_userinfo_delete_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='age',
        ),
    ]