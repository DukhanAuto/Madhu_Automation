Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Cards").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("CORPORATE CREDIT").Click @@ script infofile_;_ZIP::ssf5.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").Link("Card Details").Exist(10) then
reporter.ReportEvent micPass,"Verify Credited amount","User able to see transfered amount added to my card"
else
reporter.ReportEvent micFail,"Verify Credited amount","User get an error unable to see added transfered amount to my card"
End If


