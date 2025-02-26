from rest_framework import serializers
from .models import HelloWorld

class HelloWorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = HelloWorld
        fields = '__all__'  # Or specify fields like ['id', 'message']
