from itertools import product
from rest_framework import serializers
from .models import ActivityCard

class ActivityCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityCard
        fields = '__all__'