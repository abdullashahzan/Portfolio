# Generated by Django 4.2.18 on 2025-02-21 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=128)),
                ('project_description', models.CharField(max_length=512)),
                ('github_link', models.CharField(max_length=128)),
                ('project_stack', models.CharField(max_length=512)),
                ('project_image', models.ImageField(upload_to='./static/main/media')),
                ('project_views', models.IntegerField(default=0)),
                ('project_upload_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
