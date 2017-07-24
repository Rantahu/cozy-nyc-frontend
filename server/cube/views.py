from django.shortcuts import render
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from cube.models import Cube
from rest_framework import status, generics
from .serializers import CubeSerializer


def cube(request, post_id):
    """This is a view for a article post

    Args:
        cube_id:
    """
    return render(request, 'post.html', {'id':cube_id})

class CubeList(generics.ListCreateAPIView):
    """This is for the api view

    """
    def get(self, request, format=None):
        """
        """
        cube = Cube.objects.all().order_by('-date')
        serializer = CubeSerializer(cube, many=True)
        return Response(serializer.data)

    @permission_classes((IsAdminUser, ))
    def cube(self, request, format=None):
        """
        """
        user = request.user
        serializer = CubeSerializer(data=request.data, context={'user':user})
        if serializer.is_vaild():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CubeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cube.objects.all()
    serializer_class = CubeSerializer
