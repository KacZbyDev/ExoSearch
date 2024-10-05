from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
from rest_framework import serializers

class VoteSerializer(serializers.Serializer):
    target_type = serializers.ChoiceField(choices=['post', 'comment'])
    target_id = serializers.IntegerField()
    is_upvoted = serializers.BooleanField()

    def validate(self, data):
        target_type = data.get('target_type')
        target_id = data.get('target_id')

        if target_type == 'post':
            if not Post.objects.filter(id=target_id).exists():
                raise serializers.ValidationError('Post does not exist.')
        elif target_type == 'comment':
            if not Comment.objects.filter(id=target_id).exists():
                raise serializers.ValidationError('Comment does not exist.')
        return data