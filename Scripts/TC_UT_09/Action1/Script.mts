datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(3)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Quick Links").Click
Browser("Dukhan Bank").Page("Dukhan Bank").Image("First Finance").Click @@ script infofile_;_ZIP::ssf6.xml_;_
if browser("FFC").Page("FFC").WebElement("First Finance").Exist(10) then
reporter.ReportEvent micPass,"Verify Barwa bank link","User should be able to redirect to new window"
else
reporter.ReportEvent micFail,"Verify Barwa bank link","User get an error unable to redirect to new window"
End If



