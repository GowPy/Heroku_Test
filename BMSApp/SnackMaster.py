
from django.http import HttpResponse
import json

import pandas as pd
import datetime

from functools import reduce
from .CommonFun import convert,conn,cursor

def Save_SnackMaster(request):
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
     Snack_Name = get_key('Snack_Name')
     Snack_Qty = get_key('Snack_Qty')
     Snack_Price = get_key('Snack_Price')
     Snack_UOM = get_key('Snack_UOM')
     CreatedBy = get_key('CreatedBy')
     CreatedDate = datetime.datetime.today().strftime('%d/%m/%Y')
     Fyear = CreatedDate.split("/")[2]
     sql = 'execute Use_BMS_SnackMaster @SnackName=?,@SnackQuantity=?,@SnackUOM=?,@SnackPrice=?,@ModifiedDate=?,@ModifiedBy=?,@CreatedBy=?,@CreatedDate=?,@Fyear=?'
     Params = (Snack_Name,Snack_Qty,Snack_UOM,Snack_Price,"","",CreatedBy,CreatedDate,Fyear)
     print(Params)
     cursor.execute(sql,Params)
     result = cursor.fetchone()
     print(result)
     conn.commit()
     return HttpResponse(result)

def GetSnackMaster(request):
 if (request.method == "GET"):
  ListVal = request.GET.get('JsonText')
  ArrayList = json.loads(ListVal)
  SplitList = list(map(lambda x: x.split(' : '), ArrayList))
  DicList = reduce(lambda x, y: x + y, SplitList)
  Single_List = convert(DicList)

  def get_key(val):
   for key, value in Single_List.items():
    if val == key:
     return value

  SearchData = get_key('SearchData')
  Params = (SearchData)
  Sql = "Exec [dbo].[Use_GetSnackMaster] @SearchData =" + "'" + Params + "'"
  df = pd.read_sql_query(Sql,conn)
  result = pd.DataFrame(df)
  DicRes = result.to_dict(orient='records')
  print(result.to_dict(orient='records'))
  conn.commit()
  return HttpResponse(DicRes)

# def CheckData(request):
#  if (request.method == "GET"):
#   ListVal = request.GET.get('JsonText')
#   ArrayList = json.loads(ListVal)
#   SplitList = list(map(lambda x: x.split(' : '), ArrayList))
#   DicList = reduce(lambda x, y: x + y, SplitList)
#   Single_List = convert(DicList)
#
#   def get_key(val):
#    for key, value in Single_List.items():
#     if val == key:
#      return value
#
#   SearchData = get_key('SearchData')
#   Mode = get_key('Mode')
#   Sql = "Exec [dbo].[Use_DrinkSnack_UOM] @SearchData =" + "'" + SearchData + "',@Mode =" + "'" + Mode + "'"
#   df = pd.read_sql_query(Sql, conn)
#   result = pd.DataFrame(df)
#   print(result)
#   DicRes = result.to_dict(orient='records')
#   my_list = list()
#   if (Mode == 'Check_Snack' or Mode == 'Check_Drink'):
#    for i in range(len(DicRes)):
#     Val = ((DicRes[i].pop('uom')))
#     my_list.append({Val})
#     print(my_list)
#   conn.commit()
#   return HttpResponse(my_list)