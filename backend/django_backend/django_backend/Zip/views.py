from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication

from .serializers import UserSerializer


def students(request):
    # //define 3 students
    # Return the highest scorer among them
    return render(request, 'students.html')


@api_view(['GET'])
def list_users(request):
    """
    Basic paginated endpoint that returns a few users at a time.
    DRF's PageNumberPagination keeps the logic short and readable.
    """

    paginator = PageNumberPagination()
    paginator.page_size = 1
    users = User.objects.order_by('id')
    page = paginator.paginate_queryset(users, request)
    serializer = UserSerializer(page, many=True)
    response = paginator.get_paginated_response(serializer.data)
    response.data['page'] = paginator.page.number
    response.data['page_size'] = paginator.get_page_size(request)
    return response


@api_view(['GET'])
@authentication_classes([JWTAuthentication])
@permission_classes([permissions.IsAuthenticated])
def user_detail(request):
    """
    Super small view: it simply returns data for the user whose token is provided.
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)
