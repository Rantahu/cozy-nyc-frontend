from django.shortcuts import render
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from apps.cube.models import Cube
from rest_framework import status, generics

def cube(request, post_id):
    return render(request, 'cube.html', {'id': post_id})

class CubeList(generics.ListCreateAPIView):

    def get(self, request, format=None):
        cube = Cube.objects.all().order_by('-date')
        serializer = CubeSerializer(cube, many=True)
        return Response(serializer.data)

    @permission_classes((IsAdminUser, ))
    def post(self, request, format=None):
        user = request.user
        serializer = CubeSerializer(data=request.data, context=['user':user])
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

class PostDetail(generics.RetrieveUpdateDestoryAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
