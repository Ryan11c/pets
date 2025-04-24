from rest_framework import serializers
from .models import Pet

class PetSerializer(serializers.ModelSerializer):
    #This is to see the full image url
    picture = serializers.ImageField(use_url=True)
    class Meta:
        model = Pet
        fields = '__all__'