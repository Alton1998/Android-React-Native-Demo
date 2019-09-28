from django.contrib import admin

# Register your models here.
from .models import Fest,Events

@admin.register(Fest)
class FestAdmin(admin.ModelAdmin):
    search_fields =['name','description']
    list_display =['name','description']
    list_filter = ['name']


@admin.register(Events)
class EventAdmin(admin.ModelAdmin):
    search_fields =['name','fest']
    list_display =['name','fest']
    list_filter = ['name','fest']