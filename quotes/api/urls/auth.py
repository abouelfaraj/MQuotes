from django.urls import path
from ..views import auth
# from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
	path('register', auth.UserRegister.as_view(), name='register'),
	path('login', auth.UserLogin.as_view(), name='login'),
	path('logout', auth.UserLogout.as_view(), name='logout'),
	path('user', auth.UserView.as_view(), name='user'),
]