# Generated by Django 4.2.17 on 2024-12-19 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_remove_skill_language_remove_skill_logo_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterUniqueTogether(
            name='skill',
            unique_together={('proficiency_level',)},
        ),
    ]
