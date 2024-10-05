
# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .serializers import VoteSerializer, PostSerializer
from .models import Post, Comment, Vote

@api_view(['GET'])
def get_post(request) -> Response:
    unserialized_data = Post.objects.all()
    serializer = PostSerializer(unserialized_data, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
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