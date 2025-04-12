from django.urls import path
from .views import CalculoAPIView

urlpatterns = [
    path("calculate/", CalculoAPIView.as_view(), name="calculo"),
    path("results/", CalculoAPIView.as_view(), name="results"),
]
