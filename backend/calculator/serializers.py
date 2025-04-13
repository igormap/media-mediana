from rest_framework import serializers
from .models import Calculo


class CalculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Calculo
        fields = [
            "id",
            "number1",
            "number2",
            "number3",
            "average",
            "median",
            "status",
            "created_at",
        ]
        read_only_fields = ["average", "median", "created_at"]
