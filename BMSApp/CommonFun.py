import pypyodbc as odbc

Driver_Name = 'SQL SERVER'
Server_Name = 'DESKTOP-QIBPOET\SQLEXPRESS'
DataBase_Name = 'Project_BMS'

connection_str = f"""
   Driver={{{Driver_Name}}};
   Server={Server_Name};
   Database={DataBase_Name};
   uid=<PyFSDGow>;
   pwd=<213107>;
   Trusted_Connection=yes;
"""
conn = odbc.connect(connection_str)
cursor = conn.cursor()
print(conn)

def convert(lst):
 res_dict = {}
 for i in range(0, len(lst), 2):
  res_dict[lst[i]] = lst[i + 1]
 return res_dict