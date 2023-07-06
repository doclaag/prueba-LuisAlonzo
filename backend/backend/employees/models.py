from django.db import models

class Empleado(models.Model):
    nombre = models.CharField(max_length=255)
    id_empleado = models.CharField(max_length=10, unique=True)
    salario_base = models.DecimalField(max_digits=8, decimal_places=2)
    horas_trabajadas = models.PositiveIntegerField()

    def __str__(self):
        return self.nombre
