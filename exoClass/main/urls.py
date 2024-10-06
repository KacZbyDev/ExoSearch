from .views import *
from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('get-post', get_post, name='get-post'),
    path('handle-vote',handle_vote),
    path('get-comments/<int:pk>', handle_comment),
    path('register/',handle_registration),
    path('test',handleTest),
    path('get-node',get_node),
    path('get-csrf-token',get_csrf_token),
    path('search-planets/<str:pattern>', search_exoplanets),
    path('search-planets/',search_exoplanets)
]