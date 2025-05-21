from rest_framework import serializers
from .models import Physiotherapist

class PhysiotherapistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Physiotherapist
        fields = '__all__'