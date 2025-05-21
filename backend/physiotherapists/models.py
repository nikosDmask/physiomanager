from django.db import models

# Create your models here.
class Physiotherapist(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name
