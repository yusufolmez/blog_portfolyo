from django.contrib import admin
from .models import BlogPost, Project, Language, Skill

admin.site.register(BlogPost)
admin.site.register(Project)
admin.site.register(Language)
admin.site.register(Skill)