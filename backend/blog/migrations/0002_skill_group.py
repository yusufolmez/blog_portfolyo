# Generated by Django 4.2.17 on 2024-12-19 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='group',
            field=models.CharField(choices=[('Main', 'Main'), ('Side', 'Side')], default='Main', max_length=4),
        ),
    ]
