from django.db import models
from patients.models import Patient
from physiotherapists.models import Physiotherapist
from datetime import timedelta

class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    physiotherapist = models.ForeignKey(Physiotherapist, on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    duration_minutes = models.PositiveIntegerField(default=30)
    status = models.CharField(
        max_length=20,
        choices=[("confirmed", "Confirmed"), ("cancelled", "Cancelled")],
        default="confirmed"
    )
    notes = models.TextField(blank=True)

    @property
    def end_time(self):
        return self.start_time + timedelta(minutes=self.duration_minutes)

    def __str__(self):
        return f"{self.patient} at {self.start_time}"
