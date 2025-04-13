from celery import shared_task
from .models import Calculo
import statistics


@shared_task
def calcular_media_mediana(calculo_id):
    try:
        calculo = Calculo.objects.get(id=calculo_id)
        numbers = [calculo.number1, calculo.number2, calculo.number3]
        average = sum(numbers) / 3
        median = statistics.median(numbers)

        calculo.average = float("{:.2f}".format(average))
        calculo.median = median
        calculo.status = "Concluído"
        calculo.save()

    except Calculo.DoesNotExist:
        pass
