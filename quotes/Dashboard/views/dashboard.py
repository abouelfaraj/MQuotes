from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def index(request):
    # context = get_current_language
    return render(request, "adm/index.html")