# Generated by Django 5.1.1 on 2024-10-04 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_comment_vote_count_post_vote_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='avatar',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]