from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from UniFestAPP.serializers import CreateUserSerializer,FestSerializer,EventSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Fest,Events

class CreateUserAPIView(CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        # We create a token than will be used for future auth
        token = Token.objects.create(user=serializer.instance)
        token_data = {"token": token.key,}
        return Response(
            {**serializer.data, **token_data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class LogoutUserAPIView(APIView):
    queryset = get_user_model().objects.all()

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class Fests(APIView):
    def get(self,request):
        data=Fest.objects.all()
        serializer=FestSerializer(data,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=FestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class Event(APIView):
    def get(self,request):
        data=Events.objects.all()
        serializer=EventSerializer(data,many=True)
        return Response(serializer.data)
    def post(self,request):
        serializer=EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
class EventFest(APIView):
    def get(self,request,Fest1):
        print(Fest1)
        fest=Fest.objects.get(name=Fest1)
        print(fest.id)
        data=Events.objects.filter(fest=fest.id)
        serializer=EventSerializer(data,many=True)
        return Response(serializer.data)
