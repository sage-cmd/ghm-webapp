from rest_framework import viewsets
from .models import Worship
from .serializers import WorshipSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import WorshipSerializer


class WorshipViewSet(viewsets.ModelViewSet):
    queryset = Worship.objects.all()
    serializer_class = WorshipSerializer

@api_view(['GET'])
def worship_list(request):
    worships = Worship.objects.all()
    serializer = WorshipSerializer(worships, many=True)
    return Response(serializer.data)