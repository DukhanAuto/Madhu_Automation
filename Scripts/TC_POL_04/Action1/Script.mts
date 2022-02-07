Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","PostLogin","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
wait 20
call Logout() @@ script infofile_;_ZIP::ssf5.xml_;_
