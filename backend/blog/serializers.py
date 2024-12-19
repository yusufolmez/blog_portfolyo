from rest_framework import serializers
from .models import BlogPost, Project, Language, Skill

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ['id', 'name', 'logo'] 

class SkillsSerializer(serializers.ModelSerializer):
    languages = LanguageSerializer(many=True, read_only=True)

    class Meta:
        model = Skill
        fields = ['id' , 'languages','group']


class ProjectSerializer(serializers.ModelSerializer):
    languages = LanguageSerializer(many=True) 

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'url', 'languages']

