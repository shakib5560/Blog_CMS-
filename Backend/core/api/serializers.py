from rest_framework import serializers
from .models import BannerTitle, Bannerimages


class HelloWorldSerializer(serializers.ModelSerializer):
    class Meta:
        model = BannerTitle
        fields = '__all__'  # Or specify fields like ['id', 'message']


class BannerimagesSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Bannerimages
        fields = ['id', 'image_url', 'created_at', 'updated_at']  # Explicitly define fields

    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image:
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None    