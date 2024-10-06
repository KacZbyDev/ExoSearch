from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class profileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Profile
        fields = '__all__'
class PostSerializer(serializers.ModelSerializer):
    profile = profileSerializer(read_only=True)
    class Meta:
        model = Post
        fields = '__all__'

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
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    repeated_password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('username', 'password','email','repeated_password')
    def validate(self,data):
        if data['password'] != data['repeated_password']:
            raise serializers.ValidationError('Passwords do not match.')
        return data
    def create(self, validated_data):
        validated_data.pop('repeated_password')
        user = User.objects.create_user(**validated_data)
        return user
class ProfileNodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfileNode
        fields = '__all__'
class NodeSerializer(serializers.ModelSerializer):
    ProfileNode = ProfileNodeSerializer()
    class Meta:
        model = Node
        fields = '__all__'
class ExoplanetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exoplanets
        fields = '__all__'
