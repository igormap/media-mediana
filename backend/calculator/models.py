from django.db import models


class Calculo(models.Model):
    number1 = models.FloatField()
    number2 = models.FloatField()
    number3 = models.FloatField()
    average = models.FloatField(null=True, blank=True)
    median = models.FloatField(null=True, blank=True)
    status = models.TextField(default="Processando")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "Processamento"

    def __str__(self):
        return f"Average: {self.average} | Median: {self.median}"
