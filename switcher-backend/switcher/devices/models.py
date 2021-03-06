from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Device(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    description = models.TextField(blank=True, null=True)
    value = models.IntegerField(
            default=0,
            validators=[MaxValueValidator(1),
                        MinValueValidator(0)]
    )
    device_data = models.TextField(blank=False, null=False)

    def __unicode__(self):
        return str(self.name)
