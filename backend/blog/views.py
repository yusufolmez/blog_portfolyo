from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import generics
from .models import BlogPost, Project, Language, Skill
from .serializers import BlogPostSerializer, ProjectSerializer, LanguageSerializer, SkillsSerializer

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    @action(detail=True, methods=['delete'])
    def delete_project(self, request, pk=None):
        project = self.get_object()
        project.delete()
        return Response({'message': 'Proje başarıyla silindi.'}, status=status.HTTP_200_OK)
    
class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillsSerializer

