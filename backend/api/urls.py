from django.urls import path
from . import views

urlpatterns = [
    path('get_pets/', views.getPets, name='get_pets'), #api for pet list
    path('', views.home, name='home'),
    path('random_pets/', views.getRandomPets, name='random_pet'), #api for random pet
    path('battle/', views.get_or_create_battle, name='battle_pet'), #api for the main logic of this application
    path('battle/<int:battle_id>/vote/', views.vote_pet, name='vote_pet'), #api for voting
    path('battle/<int:battle_id>/comments/', views.battle_comments), #api for commenting
]