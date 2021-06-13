from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def page1(request):
    return render(request, 'page1.html')
