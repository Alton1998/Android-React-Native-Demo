from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from .views import CreateUserAPIView, LogoutUserAPIView,Fests,Event,EventFest


urlpatterns = [
    url(r'^auth/login/$',
        obtain_auth_token,
        name='auth_user_login'),
    url(r'^auth/register/$',
        CreateUserAPIView.as_view(),
        name='auth_user_create'),
    url(r'^auth/logout/$',
        LogoutUserAPIView.as_view(),
        name='auth_user_logout'),

url(r'^Fests/$',
        Fests.as_view(),
        name='Fests'),
url(r'^Events/$',
        Event.as_view(),
        name='Events'),
url(r'^FestEvent/(?P<Fest1>[\w\-]+)/$',EventFest.as_view(),name='EventFest'),
]