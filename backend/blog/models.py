from django.db import models
from django.contrib.auth.models import User

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Language(models.Model):
    name = models.CharField(max_length=100, unique=True)
    logo = models.ImageField(upload_to='languages/', blank=True, null=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    languages = models.ManyToManyField(Language, related_name='skills')


    def __str__(self):
        return ', '.join([lang.name for lang in self.languages.all()])


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    url = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    languages = models.ManyToManyField(Language, blank=True)

    def __str__(self):
        return self.title