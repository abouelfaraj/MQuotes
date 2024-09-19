from django.urls import path
from ..views import feeds

urlpatterns = [
    path('feeds', feeds.getFeedsWhereIamfollow, name='getFeedsWhereIamfollow'),
]