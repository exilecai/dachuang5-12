# Generated by Django 3.2.8 on 2023-05-07 07:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0016_auto_20230506_2214'),
    ]

    operations = [
        migrations.AddField(
            model_name='buy',
            name='amount',
            field=models.IntegerField(default=1, verbose_name='购气量'),
            preserve_default=False,
        ),
    ]