Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global"
datatable.SetCurrentRow(3)
strRemarks=datatable.Value("Remarks",Global)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Unblock Card").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set strRemarks
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
wait 5
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Warning").Exist(10) then
reporter.ReportEvent micWarning,"Success message not displayed","User get warning message as 'No Block cards found"
else
reporter.ReportEvent micPass,"Success message displayed"," User able to submit the request for Unblock card"
End If

