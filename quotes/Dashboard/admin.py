from django.contrib import admin
from .models import Feed, TypeFeed

# Register your models here.

@admin.register(TypeFeed)
class TypeFeedAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Feed)
class FeedAdmin(admin.ModelAdmin):
    list_display = ('user', 'type_feed', 'created_at')
    list_filter = ('user', 'type_feed')
    search_fields = ('user__username', 'type_feed__name')