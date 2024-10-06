from django.db import models
from django.contrib.auth.models import User
import datetime


class Node(models.Model):
    id = models.AutoField(primary_key=True)
    x_coordinate = models.FloatField()
    y_coordinate = models.FloatField()
    name = models.CharField(max_length=100)
    image_path = models.CharField(max_length=255)
    description = models.TextField()

    NODE_TYPE_CHOICES = [
        ('lesson', 'Lesson'),
        ('quiz', 'Quiz'),
    ]
    node_type = models.CharField(
        max_length=255,
        choices=NODE_TYPE_CHOICES,
        default='type1'
    )

    def __str__(self):
        return self.name


class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    avatar = models.CharField(max_length=255,null=True,blank=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

    def __str__(self):
        return f"{self.user.username}'s Profile"


class ProfileNode(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_node')
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='profile_nodes')
    is_unlocked = models.BooleanField()

    def __str__(self):
        return f"ProfileNode: {self.profile} - {self.node}"


class Lesson(models.Model):
    id = models.AutoField(primary_key=True)
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='lessons')
    text = models.TextField()

    def __str__(self):
        return f"Lesson {self.id} for Node {self.node.name}"


class Question(models.Model):
    id = models.AutoField(primary_key=True)
    node = models.ForeignKey(Node, on_delete=models.CASCADE, related_name='questions')
    name = models.CharField(max_length=255)
    time = models.TimeField()

    def __str__(self):
        return self.name


class Option(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    is_correct = models.BooleanField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')

    def __str__(self):
        return self.name


class Post(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(default=datetime.date.today)
    text = models.TextField()
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='posts')
    header = models.CharField(max_length=255)
    vote_count = models.IntegerField(default=0)

    def __str__(self):
        return self.header


class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateTimeField(name="date")
    text = models.TextField()  # Changed from BigInt to TextField as likely intended
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    vote_count = models.IntegerField(default=0)

    def __str__(self):
        return f"Comment by {self.profile} on {self.post}"


class Vote(models.Model):
    id = models.AutoField(primary_key=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='votes')
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='votes', null=True, blank=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='votes', null=True, blank=True)
    is_upvoted = models.BooleanField()

    def __str__(self):
        target = self.comment if self.comment else self.post
        return f"Vote by {self.profile} on {target}"


class Attempt(models.Model):
    id = models.AutoField(primary_key=True)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='attempts')
    question = models.ForeignKey(Question, on_delete=models.SET_NULL, null=True, blank=True, related_name='attempts')
    is_attempt = models.BooleanField()
    attempt_date = models.DateTimeField()
    lesson = models.ForeignKey(Lesson, on_delete=models.SET_NULL, null=True, blank=True, related_name='attempts')

    def __str__(self):
        return f"Attempt by {self.profile} on {self.question} at {self.attempt_date}"
class Exoplanets(models.Model):
    pl_name = models.CharField(max_length=29)
    hostname = models.CharField(max_length=27)
    sy_snum = models.CharField(max_length=7)
    sy_pnum = models.CharField(max_length=7)
    discoverymethod = models.CharField(max_length=29)
    disc_year = models.CharField(max_length=9)
    disc_facility = models.CharField(max_length=46)
    pl_rade = models.CharField(max_length=7, blank=True, null=True)
    pl_radj = models.CharField(max_length=7, blank=True, null=True)
    pl_bmasse = models.CharField(max_length=11, blank=True, null=True)
    st_spectype = models.CharField(max_length=16, blank=True, null=True)
    st_teff = models.CharField(max_length=8, blank=True, null=True)
    st_rad = models.CharField(max_length=6, blank=True, null=True)
    st_mass = models.CharField(max_length=7, blank=True, null=True)
    st_met = models.CharField(max_length=6, blank=True, null=True)
    st_metratio = models.CharField(max_length=11, blank=True, null=True)
    rastr = models.CharField(max_length=14)
    ra = models.CharField(max_length=11)
    sy_dist = models.CharField(max_length=12, blank=True, null=True)