from django.urls import path
from . import views

urlpatterns = [
    path('routes/', views.getRoutes, name='routes'), #api for pet list
    path('', views.home, name='home'),
    path('random_pets/', views.getRandomPets, name='random_pet'), #api for random pet
]