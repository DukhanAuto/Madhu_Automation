Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP Wallet").Exist(10) then
reporter.ReportEvent micPass,"Verify Wallets","User able to see newly created wallets under my wallets"
else
reporter.ReportEvent micFail,"Verify wallets","User able to see newly created wallets under my wallets"
End If
