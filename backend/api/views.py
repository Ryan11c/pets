# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.contrib import messages
from .models import Pet
from .serializers import PetSerializer
import random
from django.http import JsonResponse


from .models import Pet
from .serializers import PetSerializer


#Pet API that returns all the pets
@api_view(['GET'])
def getRoutes(request):
    pets = Pet.objects.all()  
    serialized_data = PetSerializer(pets, many=True).data  
    return Response({"pet_list": serialized_data})


def home(request):
    return render(request, 'home.html')


#API to get 2 random pets 
@api_view(['GET'])
def getRandomPets(request):
    pets = list(Pet.objects.all())
    if len(pets) > 2:
        random_pets = random.sample(pets, 2)
        serialized_data = PetSerializer(random_pets, many=True).data
    else:
        #Not enough pets (pets < 2)
        messages.error(request, ("Not enough pets"))
        return Response({"error": "not enough pets"}, status=404)
        
    return Response(serialized_data)
