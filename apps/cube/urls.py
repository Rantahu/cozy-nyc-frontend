from django.conf.urls import *
from rest_framework.urlpatterns import format_suffix_patterns
from apps.cube import views

urlpatterns = [
    url(r'^(?P<cube_id>\d+)/$', 'cube.views.cube'),
    url(r'^api/$', views.CubeList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$'. views.CubeDetail.as_views())
    ]

urlpatterns = format_suffix_patterns(urlpatterns)
