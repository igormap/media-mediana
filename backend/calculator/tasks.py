# core/tasks.py

from celery import shared_task
from calculator.models import Calculo
import time


@shared_task
def calcular_media_mediana(calculo_id):
    try:
        obj = Calculo.objects.get(id=calculo_id)

        # Simula tempo de processamento
        time.sleep(5)

        numeros = [obj.number1, obj.number2, obj.number3]
        media = sum(numeros) / 3
        mediana = sorted(numeros)[1]

        obj.average = media
        obj.median = mediana
        obj.status = "Concluído"
        obj.save()

    except Calculo.DoesNotExist:
        print(f"Registro com id {calculo_id} não encontrado.")
