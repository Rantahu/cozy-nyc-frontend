from django.contrib import admin
from apps.cube.models import Cube

class CubeAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ['title']

admin.site.register(Cube, CubeAdmin)
