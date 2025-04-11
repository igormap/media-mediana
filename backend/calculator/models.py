from django.db import models


class Calculo(models.Model):
    number1 = models.FloatField()
    number2 = models.FloatField()
    number3 = models.FloatField()
    average = models.FloatField()
    median = models.FloatField()
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Average: {self.media} | Median: {self.mediana}"
