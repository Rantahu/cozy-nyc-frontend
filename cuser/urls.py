from django.conf.urls import url
from django.contrib import admin
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    url(r'^login/$', auth_views.login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout/$', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^signup/$', views.signup, name='signup'),
    url(r'^account/changepassword/$', auth_views.password_change, name='password_change'),
    url(r'^account/changedone/$', auth_views.password_change_done, name='password_change_done'),
    url(r'^account/password-reset/$', auth_views.password_reset, name='password_reset'),
    url(r'^account/password-reset/done/$', auth_views.password_reset_done, name='password_reset_done'),
    url(r'^account/password-reset/confirm/(?P<uidb64>[-\w]+)/(?P<token>[-\w]+)/$', auth_views.password_reset_confirm, name='password_reset_confirm'),
    url(r'^account/password-reset/complete/$', auth_views.password_reset_complete, name='password_reset_complete'),
    url(r'^account_activation_sent/$', views.account_activation_sent, name='account_activation_sent'),
    url(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
        views.activate, name='activate'),
    url(r'^admin/', admin.site.urls),
]
