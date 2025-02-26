from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import HelloWorld
from .serializers import HelloWorldSerializer

@api_view(['GET'])
def bannertext(request):
    latest_data = HelloWorld.objects.order_by('-created_at').first()  # Get the most recent record
    if latest_data:
        serializer = HelloWorldSerializer(latest_data)
        return Response(serializer.data)
    return Response({"message": "No data found"}, status=404)
