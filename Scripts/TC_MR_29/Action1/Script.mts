Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("E-Requests History").Click @@ script infofile_;_ZIP::ssf5.xml_;_

wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ALL").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("New").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("In Progress").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Closed").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("No Data Found...").Exist(10) then
reporter.ReportEvent micPass,"Verify Closed","User should be able to see history for Closed"
else
reporter.ReportEvent micFail,"Verify Closed","User get an error unable to see any history"
End If
