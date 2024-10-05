from .views import *
from django.urls import path



urlpatterns = [
    path('get-post', get_post, name='get-post'),
]