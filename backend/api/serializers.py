from rest_framework import serializers
from .models import Pet, Battle, Comment


class PetSerializer(serializers.ModelSerializer):
    #This is to see the full image url
    picture = serializers.ImageField(use_url=True)
    class Meta:
        model = Pet
        fields = '__all__'


class BattleSerializer(serializers.ModelSerializer):
    pet1 = PetSerializer()
    pet2 = PetSerializer()
    class Meta:
        model = Battle
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
