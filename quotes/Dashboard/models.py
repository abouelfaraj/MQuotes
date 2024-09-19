from django.db import models
from django.contrib.auth.models import User

class TypeFeed(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Feed(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type_feed = models.ForeignKey(TypeFeed, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.type_feed.name}"
