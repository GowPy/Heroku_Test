"""
URL configuration for BMSProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from . import views, LogIn ,DrinkMaster ,SnackMaster

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('LogIn',views.LogIn_Page,name='LogIn Page'),
    path('BMS', views.BMS_Home, name='Home Page'),
    path('Dashboard', views.BMSDashboard, name='Dash'),
    path('User_Master', views.User_Master, name='User Master'),
    path('User_MasterIndex', views.User_MasterIndex, name='User Master Index'),
    path('Snack_Master', views.Snack_Master, name='Snack Master'),
    path('Snack_MasterIndex', views.Snack_MasterIndex, name='Snack Master Index'),
    path('Drink_MasterIndex', views.Drink_MasterIndex, name='Drink Master Index'),
    path('Drink_Master', views.Drink_Master, name='Drink Master'),
    path('T_Bill', views.T_Bill, name='T-Bill'),
    path('DailyReport', views.Daily_Report, name='Daily Report'),
    path('MonthlyReport', views.Monthly_Report, name='Monthly Report'),
    path('YearlyReport', views.Yearly_Report, name='Yearly Report'),
    path('Save/', views.Save),
    path('LogIn/', LogIn.LogIn),
    path('SaveDrink/', DrinkMaster.Save_DrinkMaster),
    path('SaveSnack/', SnackMaster.Save_SnackMaster),
    path('GetDrinkMaster/', DrinkMaster.GetDrinkMaster),
    path('GetSnackMaster/', SnackMaster.GetSnackMaster),
    # path('CheckData/', SnackMaster.CheckData),
    path('GetData/', DrinkMaster.GetData),
    path('DeleteData/', DrinkMaster.DeleteData),
]


