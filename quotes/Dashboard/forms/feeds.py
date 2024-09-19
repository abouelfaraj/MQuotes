from django import forms
from ..models import Feed, TypeFeed

class FeedForm(forms.ModelForm):
    class Meta:
        model = Feed
        fields = ['user', 'type_feed', 'content']

class TypeFeedForm(forms.ModelForm):
    class Meta:
        model = TypeFeed
        fields = ['name']
