from django.urls import path
from ..views import dashboard

urlpatterns = [
    path('', dashboard.index, name='index'),
]