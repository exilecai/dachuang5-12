# Generated by Django 3.2.8 on 2023-05-05 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0014_auto_20230505_2049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='email',
            field=models.EmailField(max_length=128, null=True),
        ),
    ]
