# Generated by Django 4.1.6 on 2023-04-18 08:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ranqiapp', '0009_qp2'),
    ]

    operations = [
        migrations.CreateModel(
            name='dailycng',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dailycng_date', models.DateField()),
                ('dailycng_id', models.IntegerField()),
                ('dailycng_h', models.FloatField()),
                ('dailycng_s', models.FloatField()),
                ('dailycng_p', models.FloatField()),
                ('dailycng_z', models.FloatField()),
                ('dailycng_T', models.FloatField()),
                ('dailycng_Pre', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='dailylng',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dailylng_date', models.DateField()),
                ('dailylng_id', models.IntegerField()),
                ('dailylng_h', models.FloatField()),
                ('dailylng_s', models.FloatField()),
                ('dailylng_p', models.FloatField()),
                ('dailylng_z', models.FloatField()),
                ('dailylng_T', models.FloatField()),
                ('dailylng_Pre', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='dailypipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dailypipe_date', models.DateField()),
                ('dailypipe_id', models.IntegerField()),
                ('dailypipe_h', models.FloatField()),
                ('dailypipe_s', models.FloatField()),
                ('dailypipe_p', models.FloatField()),
                ('dailypipe_z', models.FloatField()),
                ('dailypipe_T', models.FloatField()),
                ('dailypipe_Pre', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='fangsan1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fangsan1_date', models.DateField()),
                ('fangsan1_num', models.FloatField()),
                ('fangsan1_area', models.CharField(max_length=64)),
                ('fangsan1_reason', models.CharField(max_length=64)),
                ('fangsan1_loss', models.FloatField()),
                ('fangsan1_field', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='fangsan2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fangsan2_date', models.DateField()),
                ('fangsan2_num', models.FloatField()),
                ('fangsan2_area', models.CharField(max_length=64)),
                ('fangsan2_reason', models.CharField(max_length=64)),
                ('fangsan2_loss', models.FloatField()),
                ('fangsan2_field', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='selfuse1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selfuse1_date', models.DateField()),
                ('selfuse1_num', models.FloatField()),
                ('selfuse1_area', models.CharField(max_length=64)),
                ('selfuse1_reason', models.CharField(max_length=64)),
                ('selfuse1_way', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='selfuse2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('selfuse2_date', models.DateField()),
                ('selfuse2_num', models.FloatField()),
                ('selfuse2_area', models.CharField(max_length=64)),
                ('selfuse2_reason', models.CharField(max_length=64)),
                ('selfuse2_way', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='sell1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sell1_date', models.DateField()),
                ('sell1_num', models.CharField(max_length=64)),
                ('sell1_name', models.CharField(max_length=64)),
                ('sell1_sell', models.FloatField()),
                ('sell1_price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='sell2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sell2_date', models.DateField()),
                ('sell2_sell', models.FloatField()),
                ('sell2_unit', models.CharField(max_length=32)),
                ('sell2_price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='sell3',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sell3_date', models.DateField()),
                ('sell3_num', models.CharField(max_length=64)),
                ('sell3_name', models.CharField(max_length=64)),
                ('sell3_sell', models.FloatField()),
                ('sell3_price', models.FloatField()),
            ],
        ),
    ]