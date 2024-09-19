from django.shortcuts import render, redirect
from django.http import JsonResponse
from Dashboard.forms.feeds import FeedForm
from Dashboard.models import Feed

def add_feed(request):
    if request.method == 'POST':
        form = FeedForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('feed_list')  # Redirect to a page where you list feeds
    else:
        form = FeedForm()
    return render(request, 'add_feed.html', {'form': form})


# Create your views here.
def getFeedsWhereIamfollow(request):
    # if request.user.is_authenticated:
    # Retrieve feeds for the logged-in user
    # feeds = Feed.objects.filter(user=request.user)
    # Fetch the feeds
    feeds = Feed.objects.all().values('id','type_feed__name', 'content', 'created_at')

    # Convert the QuerySet to a list of dictionaries
    feeds_list = list(feeds)

    # Return the data as a JSON response
    return JsonResponse(feeds_list, safe=False)
    # else:
    # Redirect to login page if the user is not authenticated
    #return redirect('login')