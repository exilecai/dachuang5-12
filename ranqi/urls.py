"""ranqi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path

from ranqiapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('logout/',views.logout),
    path('infolist/', views.infolist, name='infolist'),
    path('index/', views.index),
    path('analyses/overall/1/', views.analyses_overall_1),
    path('director/', views.director),
    path('analyses/overall/2/', views.analyses_overall_2),
    path('leakage/', views.leakage, name='leakage'),
    path('leakage2/', views.leakage2, name='leakage2'),
    path('supervision/', views.supervision, name='supervision'),
    path('supervision2/', views.supervision2, name='supervision2'),
    path('analyses/meter/1/', views.analyses_meter_1, ),
    path('analyses/meter/2/', views.analyses_meter_2, ),
    path('afterlogin/', views.afterlogin, name='afterlogin'),
    path('datamanage1/', views.datamanage1, name='datamanage1'),
    path('datamanage2/', views.datamanage2, name='datamanage2'),
    path('datamanage3/', views.datamanage3, name='datamanage3'),
    path('datamanage4/', views.datamanage4, name='datamanage4'),
    path('back/', views.back, name='back'),
    path('delete/', views.delete, name='delete'),
    path('pipe/', views.pipe, name='pipe'),
    path('pipe2/', views.pipe2, name='pipe2'),
    path('temp/', views.temp, name='temp'),
    path('temp2/', views.temp2, name='temp2'),
    path('Qc/', views.Qc, name='Qc'),
    path('Qd/', views.Qd, name='Qd'),
    path('Qf/', views.Qf, name='Qf'),
    path('Qi/', views.Qi, name='Qi'),
    path('Qp/', views.Qp, name='Qp'),
    path('Qs/', views.Qs, name='Qs'),
    path('delta/', views.delta, name='delta'),
    path('home/', views.home, name='home'),
    path('buy/', views.buy),
    path('store/', views.store),
    path('sell/', views.sell),
    path('use/', views.use),
    path('compensate/', views.compensate),
    path('diffuse/', views.diffuse),
    path('buy/delete/', views.buy_delete),
    path('store/delete/', views.store_delete),
    path('sell/delete/', views.sell_delete),
    path('use/delete/', views.use_delete),
    path('compensate/delete/', views.compensate_delete),
    path('diffuse/delete/', views.diffuse_delete),
    path('user1/', views.user1, name='user1'),
    path('user2/', views.user2, name='user2'),
    path('user3/', views.user3, name='user3'),
    path('user4/', views.user4, name='user4'),
    path('user5/', views.user5, name='user5'),
    path('superuser1/', views.superuser1, name='superuser1'),
    path('superuser2/', views.superuser2, name='superuser2'),
    path('superuser3/', views.superuser3, name='superuser3'),
    path('superuser4/', views.superuser4, name='superuser4'),
    path('superuser5/', views.superuser5, name='superuser5'),
    path('superuser6/', views.superuser6, name='superuser6'),
]
