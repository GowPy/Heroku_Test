from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse
import numpy as np
import pypyodbc as odbc
from functools import reduce
from .CommonFun import convert,conn,cursor

def LogIn(request):
    if(request.method == "GET"):
     ListVal = request.GET.get('JsonText')
     ArrayList = json.loads(ListVal)
     SplitList = list(map(lambda x: x.split(' : '), ArrayList))
     DicList = reduce(lambda x, y: x + y, SplitList)
     Single_List = convert(DicList)
     def get_key(val):
      for key, value in Single_List.items():
       if val == key:
        return value
     UserType = get_key('UserType')
     UserName = get_key('UserName')
     Password = get_key('Password')
     sql = 'execute Use_BMS_LogIn @UserName=?,@Password=?,@UserType=?'
     Params = (UserName,Password,UserType)
     cursor.execute(sql,Params)
     result = cursor.fetchone()
     print(result)
     conn.commit()
     return HttpResponse(result)
