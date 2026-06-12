from django.contrib import admin
from .models import Worship

@admin.register(Worship)
class WorshipAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at", "updated_at")
    search_fields = ("title", "description")
    list_filter = ("created_at",)


# Register your models here.
