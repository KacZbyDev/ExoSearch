from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import PostSerializer
from .models import Post


@api_view(['GET'])
def get_post(request)->Response:
    unserialized_data = Post.objects.all()
    serializer = PostSerializer(unserialized_data, many=True)
    return Response(serializer.data)
