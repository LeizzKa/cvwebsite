from django.db import models

# Create your models here.

class Skills(models.Model):
    skill = models.CharField(primary_key=True, max_length=32)

    class Meta:
        ordering = ["skill"]
  
    def __str__(self):
        return f"{self.skill}"

class Experience(models.Model):
    experience = models.CharField(primary_key=True, max_length=32)

    class Meta:
        ordering = ["experience"]
    
    def __str__(self):
        return f"{self.experience}"

class People(models.Model):
    name = models.CharField(primary_key=True, max_length=32)
    skills = models.ManyToManyField(Skills)
    experience = models.ManyToManyField(Experience)

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return f"{self.name} {self.skills} {self.experience}"