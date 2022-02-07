Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(3)

call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 4
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Later").Exist(5) then
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Later").Click @@ script infofile_;_ZIP::ssf5.xml_;_
reporter.ReportEvent micPass,"Verify Later button","User able to skip registration now and gets redirected to dash board"
else
reporter.ReportEvent micFail,"Verify Later button","User get an error unable to skip register now"
End If



