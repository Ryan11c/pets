# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import render

@api_view(['GET'])
def getRoutes(request):
    return Response(['Pet Wars!', 'Vote System', 'Leaderboard'])

def home(request):
    return render(request, 'home.html')