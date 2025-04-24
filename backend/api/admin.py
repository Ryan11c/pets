from django.contrib import admin
from .models import Pet

# Register your models here.

#Register Pet model to admin panel
admin.site.register(Pet)