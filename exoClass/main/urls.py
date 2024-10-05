from .views import *
from django.urls import path



urlpatterns = [
    path('get-post', get_post, name='get-post'),
    path('handle-vote',handle_vote),
    path('get-comments/<int:pk>', handle_comment),
    path('register/',handle_registration),
    path('test',handleTest),
    path('get-node',get_node),
    path('get-csrf-token',get_csrf_token)
]