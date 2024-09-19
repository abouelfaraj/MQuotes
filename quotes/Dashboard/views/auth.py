from django.contrib.auth import logout, authenticate, login as django_login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

# @csrf_exempt
# @require_POST
# def login(request):
    # username = request.POST.get('username')
    # password = request.POST.get('password')
    # user = authenticate(username=username, password=password)
    # if user is not None:
       # django_login(request, user)
       # return JsonResponse({'status': 'success'})
    # return JsonResponse({'status': 'fail'}, status=400)

# @csrf_exempt
# @require_POST 
# def logout_view(request):
    # logout(request)
    # return JsonResponse({'status': 'success'})