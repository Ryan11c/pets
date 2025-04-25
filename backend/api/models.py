from django.db import models


#Our pet model
class Pet(models.Model):
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=100, blank=True) 
    date = models.DateField(auto_now=True)
    picture = models.ImageField(null=True, blank=True, upload_to='images/')
    wins = models.IntegerField(default=0)
    def __str__(self):
        return f"Name: {self.name}"


#Battle model for 2 pets going against each other
class Battle(models.Model):
    pet1 = models.ForeignKey(Pet, related_name='battle_pet1', on_delete=models.CASCADE)
    pet2 = models.ForeignKey(Pet, related_name='battle_pet2', on_delete=models.CASCADE)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField() 
    pet1_votes = models.PositiveIntegerField(default=0)
    pet2_votes = models.PositiveIntegerField(default=0)
    is_closed = models.BooleanField(default=False)
    winner = models.ForeignKey(Pet, related_name='won_battles', on_delete=models.SET_NULL, null=True, blank=True)


#Comment model for each pet battle
class Comment(models.Model):
    battle = models.ForeignKey(Battle, related_name='comments', on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
