datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(4)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Historical Profit Rate").Click @@ script infofile_;_ZIP::ssf5.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("TIME DEPOSIT 23 Types").Exist(10) then
reporter.ReportEvent micPass,"Verify Historical Profit rate","User able to see the Scrolling Bar and Account Type with list of statements"
else
reporter.ReportEvent micFail,"Verify Historical Profit rate","User unable to see any statements or account types"
End If




