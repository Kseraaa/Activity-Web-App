from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from activities.views import ActivityCardView
from socialauth.auth import SocialAuthorizationView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

router = routers.DefaultRouter()
router.register('activities', ActivityCardView)

urlpatterns = [
    path('', include(router.urls)),
]