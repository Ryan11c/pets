# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render
from django.contrib import messages
from .models import Pet, Battle, Comment
from .serializers import PetSerializer, BattleSerializer, CommentSerializer
import random
from django.utils.timezone import now, timedelta
from django.http import JsonResponse


#Pet API that returns all the pets
#This is just a test! Do not use in main application
@api_view(['GET'])
def getPets(request):
    pets = Pet.objects.all()  
    serialized_data = PetSerializer(pets, many=True).data  
    return Response({"pet_list": serialized_data})


#Temp home view
def home(request):
    return render(request, 'home.html')


#API to get 2 random pets 
#This is just a test to see if the API is working. We will not be using this API for the main application@!
@api_view(['GET'])
def getRandomPets(request):
    pets = list(Pet.objects.all())
    if len(pets) >= 2:
        random_pets = random.sample(pets, 2)
        serialized_data = PetSerializer(random_pets, many=True).data
    else:
        #Not enough pets (pets < 2)
        messages.error(request, ("Not enough pets"))
        return Response({"error": "not enough pets"}, status=404)
        
    return Response(serialized_data)


#Main API to set up the battle between 2 pets
@api_view(['GET'])
def get_or_create_battle(request):
    expired = Battle.objects.filter(is_closed=False, end_time__lt=now())
    #Close expired battles
    for battle in expired:
        battle.is_closed = True
        if battle.pet1_votes > battle.pet2_votes:
            battle.winner = battle.pet1
            battle.pet1.votes += 1
            battle.pet1.save()
        elif battle.pet2_votes > battle.pet1_votes:
            battle.winner = battle.pet2
            battle.pet2.votes += 1
            battle.pet2.save()
        else:
            #In case of a tie we give both pets a win
            battle.winner = battle.pet1
            battle.pet1.votes += 1
            battle.pet1.save()
            battle.winner = battle.pet2
            battle.pet2.votes += 1
            battle.pet2.save()
        battle.save()

    #Creating new battle between 2 pets
    pets = list(Pet.objects.all())
    if len(pets) < 2:
        return Response({"error": "not enough pets"}, status=400)
    random_pets = random.sample(pets, 2)
    #Create new battle with a 7 day duration
    battle = Battle.objects.create(pet1=random_pets[0], pet2=random_pets[1], end_time=now() + timedelta(days=7))
    return Response(BattleSerializer(battle).data)


#This if for voting for a Pet in a Battle
@api_view(['POST'])
def vote_pet(request, battle_id):
    try:
        battle = Battle.objects.get(id=battle_id, is_closed=False)
    except Battle.DoesNotExist:
        return Response({"error": "battle not found"}, status=404)
    pet_id = request.data.get('pet_id')
    if pet_id == battle.pet1.id:
        battle.pet1_votes += 1
    elif pet_id == battle.pet2.id:
        battle.pet2_votes += 1
    else:
        return Response({"error": "invalid pet"}, status=400)
    battle.save()
    return Response({"message": "Vote counted"})


#This is for comment section 
@api_view(['GET', 'POST'])
def battle_comments(request, battle_id):
    if request.method == 'GET':
        comments = Comment.objects.filter(battle_id=battle_id)
        return Response(CommentSerializer(comments, many=True).data)
    if request.method == 'POST':
        data = request.data.copy()
        data['battle'] = battle_id
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)