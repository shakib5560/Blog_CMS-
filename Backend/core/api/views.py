from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import BannerTitle
from .serializers import HelloWorldSerializer
from .models import Bannerimages
from .serializers import BannerimagesSerializer

@api_view(['GET'])
def bannertext(request):
    latest_data = BannerTitle.objects.order_by('-created_at').first()  
    if latest_data:
        serializer = HelloWorldSerializer(latest_data)
        return Response(serializer.data)
    return Response({"message": "No data found"}, status=404)


@api_view(['GET'])
def bannerimages(request):
    image = Bannerimages.objects.order_by('-created_at').first() 
    if image:
        serializer = BannerimagesSerializer(image, context={"request": request}) 
        return Response(serializer.data)
    return Response({"message": "No data found"}, status=404)
