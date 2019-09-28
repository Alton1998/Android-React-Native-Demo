from django.db import models

# Create your models here.
class Fest(models.Model):
    name=models.CharField(max_length=24)
    description=models.CharField(max_length=200,default="")

    def __str__(self):
        return self.name
class Events(models.Model):
    name=models.CharField(max_length=25)
    fest=models.ForeignKey(Fest,on_delete=models.CASCADE,related_name='events')

    def __str__(self):
        return self.name


