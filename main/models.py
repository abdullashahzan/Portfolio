from django.db import models

# Create your models here.
class Project(models.Model):
	
	# Project related

	project_name = models.CharField(max_length=128)
	project_description = models.CharField(max_length=512)
	github_link = models.CharField(max_length=128)
	project_stack = models.CharField(max_length=512)
	project_image = models.ImageField(upload_to='./static/main/media')

	# User related

	project_views = models.IntegerField(default=0)

	# Automatic

	project_upload_time = models.DateTimeField(auto_now_add=True)

class Achievement(models.Model):
	
	# Project related

	achievement_name = models.CharField(max_length=128)
	achievement_description = models.CharField(max_length=512)
	achievement_image = models.ImageField(upload_to='./static/main/media')

	# User related

	achievement_views = models.IntegerField(default=0)

	# Automatic

	achievement_upload_time = models.DateTimeField(auto_now_add=True)

