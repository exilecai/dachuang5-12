# Generated by Django 3.2.8 on 2023-05-07 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0022_auto_20230507_2057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='use',
            name='use',
            field=models.SmallIntegerField(choices=[(1, '生产加工'), (2, '供暖'), (3, '烹饪')], verbose_name='使用用途'),
        ),
    ]