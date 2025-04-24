from django.db import models

# Create your models here.

#Our pet model
class Pet(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=100, blank=True) 
    date = models.DateField(auto_now=True)
    picture = models.ImageField(null=True, blank=True, upload_to='images/')
    def __str__(self):
        return f"Name: {self.name}"
    