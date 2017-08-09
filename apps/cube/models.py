from django.db import models
from django.utils import timezone
from datetime import datetime 
from django.contrib.auth.models import User


class Cube(models.Model):
    """
    """
    title = models.CharField(max_length=255, null=True, blank=True, unique=True)
    date = models.DateTimeField(default=datetime.now)
    tags = models.TextField(max_length=1000, null=True, blank=True)
    article = models.TextField(max_length=15000, null=True, blank=True)
    author = models.ForeignKey(User, null=True, blank=True)
