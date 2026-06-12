from rest_framework import serializers
from .models import Worship

class WorshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worship
        fields = '__all__'