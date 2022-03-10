from re import A
from django.shortcuts import render
from rest_framework import viewsets
from .models import ActivityCard
from .serializers import ActivityCardSerializer

class ActivityCardView(viewsets.ModelViewSet):
    queryset = ActivityCard.objects.all().order_by('id')
    serializer_class = ActivityCardSerializer
