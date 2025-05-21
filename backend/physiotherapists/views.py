from rest_framework import viewsets
from .models import Physiotherapist
from .serializers import PhysiotherapistSerializer

class PhysiotherapistViewSet(viewsets.ModelViewSet):
    queryset = Physiotherapist.objects.all()
    serializer_class = PhysiotherapistSerializer
