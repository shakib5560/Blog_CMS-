from django.urls import path
from .views import bannertext

urlpatterns = [
    path('', bannertext, name='bannertext'),
]
