from django.urls import path
from .views import bannertext, bannerimages

urlpatterns = [
    path('', bannertext, name='bannertext'),
    path('heroimg/', bannerimages, name='bannerimages'),
]