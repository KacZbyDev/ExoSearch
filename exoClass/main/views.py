from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404, render
from .serializers import *
from .models import Post, Comment, Vote

@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'detail': 'CSRF cookie set'})
@api_view(['GET'])
def get_post(request) -> Response:
    unserialized_data = Post.objects.all()
    serializer = PostSerializer(unserialized_data, many=True)
    return Response(serializer.data)

@api_view(['POST'])

def handle_vote(request) -> Response:

    serializer = VoteSerializer(data=request.data)
    if serializer.is_valid():
        profile = request.user.profile
        target_type = serializer.validated_data['target_type']
        target_id = serializer.validated_data['target_id']
        is_upvoted = serializer.validated_data['is_upvoted']

        if target_type == 'post':
            post = get_object_or_404(Post, id=target_id)
            vote, created = Vote.objects.get_or_create(
                profile=profile,
                post=post,
                defaults={'is_upvoted': is_upvoted}
            )
            if not created:
                if vote.is_upvoted == is_upvoted:

                    vote.delete()
                    message = 'Vote removed'
                else:

                    vote.is_upvoted = is_upvoted
                    vote.save()
                    message = 'Vote updated'
            else:
                message = 'Vote created'

        elif target_type == 'comment':
            comment = get_object_or_404(Comment, id=target_id)
            vote, created = Vote.objects.get_or_create(
                profile=profile,
                comment=comment,
                defaults={'is_upvoted': is_upvoted}
            )
            if not created:
                if vote.is_upvoted == is_upvoted:

                    vote.delete()
                    message = 'Vote removed'
                else:

                    vote.is_upvoted = is_upvoted
                    vote.save()
                    message = 'Vote updated'
            else:
                message = 'Vote created'

        return Response({'message': message}, status=status.HTTP_200_OK)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def handle_comment(request,pk) -> Response:
    comments = Comment.objects.filter(post_id=pk).order_by('date')
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(["POST"])
@csrf_exempt
def handle_registration(request) -> Response:
    try:
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(e)
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(["GET"])
def get_node(request) -> Response:
    unserialized_data = Node.objects.all()
    serializer = NodeSerializer(unserialized_data, many=True)
    return Response(serializer.data)
@api_view(['GET'])
def handleTest(request) -> HttpResponse:
    return render(request,'test.html')
@api_view(['GET'])
def search_exoplanets(request,pattern="")->Response:
    # data = MainExoplanets.objects.filter(name__icontains=pattern)
    data = Exoplanets.objects.filter(pl_name__icontains=pattern)[:20]
    serialized_data = ExoplanetSerializer(data, many=True)
    return Response(serialized_data.data)
