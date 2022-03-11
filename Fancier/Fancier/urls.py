from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework import routers
from activities.views import ActivityCardView

route = routers.DefaultRouter()
route.register("", ActivityCardView, basename='activitycardview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('accounts/', include('allauth.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
