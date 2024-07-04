from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse
import numpy as np
import pypyodbc as odbc
from datetime import datetime
import os
from django.template.loader import get_template


# Create your views here.
def LogIn_Page(request):
    return render(request,"LogIn.html")

def BMS_Home(request):
    return render(request,"BMSHome.html")

def BMSDashboard(request):
    return render(request,"Dashboard.html")

def User_Master(request):
    return render(request,"User_Master.html")

def User_MasterIndex(request):
    return render(request,"User_MasterIndex.html")

def Snack_Master(request):
    return render(request,"Snack_Master.html")

def Snack_MasterIndex(request):
    return render(request,"Snack_MasterIndex.html")

def Drink_Master(request):
    return render(request,"Drink_Master.html")

def Drink_MasterIndex(request):
    return render(request,"Drink_MasterIndex.html")

def T_Bill(request):
    return render(request,"T_Bill.html")

def Daily_Report(request):
    return render(request,"Daily_Report.html")

def Monthly_Report(request):
    return render(request,"Monthly_Report.html")

def Yearly_Report(request):
    return render(request,"Yearly_Report.html")

def Save(request):
    ListVal = request.GET.get('jsonText')
    ArrayList = json.loads(ListVal)
    # print(ArrayList)
    # print(len(ArrayList))
    # print(ArrayList[1])
    #Np_array = np.array(ListVal)
    #print(ListVal.length)
    #print("List = "+ Np_array[1])
    # print(Np_array[1])
    Depart = "CS"
    Rank = "First"
    result = list([Depart,Rank])
    print(result)
    data = dict()
    data['result'] = result
    print(data)
    # Pro_Name = request.GET.get('Product_Name')
    # Pro_Qty = request.GET.get('Product_Price')
    # Pro_UOM = request.GET.get('Product_Qty')
    # Pro_Price  = request.GET.get('Product_UOM')
    # print("ProName =" + Pro_Name , "Pro_Qty =" + Pro_Qty, "Pro_UOM =" + Pro_UOM , "Pro_Price =" + Pro_Price)
    # result = ["result","from","backend"]

    # sql = 'execute Usp_BMS_LogInCheck @UserName=?,@Password=?,@UserType=?,@Branch=?,@Mode=?'
    # Params = (U_Name,Pwd,U_Type,Branch,'LogIn')
    # cursor.execute(sql, Params)
    # result = cursor.fetchall()
    # Array = []
    # Res_len = len(result)
    # for i in result:
    #     if(i != ''):
    #         Array.append(i)
    #     else:
    #         print('Result = ', i)
    # print('Array  =', Array)
    # print(len(result),result[0])
    # # The result is a tuple with one element, which contains the count
    # print(result)
    return JsonResponse(data)


