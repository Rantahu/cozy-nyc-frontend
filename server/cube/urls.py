from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from cube import views

urlpatterns = [
    url(r'^(?P<cube_id>\+d)/$', views.cube),
    url(r'^api/$', views.CubeList.as_view()),
    url(r'^api/(?P<pk>[0-9]+)/$', views.CubeDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
