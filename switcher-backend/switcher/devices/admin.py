from django.contrib import admin
from .models import Device

class JoinAdmin(admin.ModelAdmin):
    list_display = ['name', 'value']

    class Meta:
        model = Device


admin.site.register(Device, JoinAdmin)
