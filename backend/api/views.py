# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
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