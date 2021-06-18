from django.http import HttpResponse
from django.shortcuts import render
import qrcode

img = qrcode.make("http://127.0.0.1:8000/mobilePage")
img.save("D:\QR Scanner\QRScanner\static\Images\qrcode.jpg")


def index(request):
    return render(request, 'index.html')


def page1(request):
    return render(request, 'page1.html')


def mobilePage(request):
    return render(request, 'mobilepage.html')
