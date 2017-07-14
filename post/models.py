from django.db import models
from django.conf import settings


class Post(models.Model):
    """This is a model for post/articles

    ToDo:
        Add CRUD
    """

    title = models.CharField(max_length=255, unique=True)
    date = models.DateTimeField(auto_now_add=True)
    tags = models.TextField(max_length=1000, null=True, blank=True)
    article = models.TextField(max_length=15000)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
