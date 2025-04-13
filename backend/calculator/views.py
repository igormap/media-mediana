from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CalculoSerializer
from .models import Calculo
from .tasks import calcular_media_mediana


class CalculoAPIView(APIView):
    def post(self, request):
        serializer = CalculoSerializer(data=request.data)
        if serializer.is_valid():
            numbers = [
                serializer.validated_data["number1"],
                serializer.validated_data["number2"],
                serializer.validated_data["number3"],
            ]

            calculo = Calculo.objects.create(
                number1=numbers[0],
                number2=numbers[1],
                number3=numbers[2],
                status="Processando",
            )

            calcular_media_mediana.delay(calculo.id)

            resposta = CalculoSerializer(calculo)
            return Response(resposta.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        calculos = Calculo.objects.all().order_by("-id")
        resposta = CalculoSerializer(calculos, many=True)
        return Response(resposta.data, status=status.HTTP_200_OK)
