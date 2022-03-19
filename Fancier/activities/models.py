from distutils.command.upload import upload
from django.db import models

class ActivityCard(models.Model):
    ACTIVITY_CHOICES = [
        ('FCFS', 'FirstComeFirstServe'),
        ('C', 'Candidate'),
    ]

    image = models.ImageField(upload_to='uploads/images', blank=False)
    name = models.CharField(max_length=150, blank=False)
    description = models.TextField()
    max_participant = models.DecimalField(max_digits=3, decimal_places=0)
    activity_type = models.CharField(max_length=4, choices=ACTIVITY_CHOICES, blank=False)
    register_time_start = models.CharField(max_length=150, blank=False)
    register_time_end = models.CharField(max_length=150, blank=False)
    activity_time_start = models.CharField(max_length=150, blank=False)
    activity_time_end = models.CharField(max_length=150, blank=False)
    
    def __str__(self):
        return self.name