Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global"
datatable.SetCurrentRow(5)
strFeedBack=datatable.Value("FeedBack",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Other Requests").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Username").Set strFeedBack
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User should be able to submit request for feedback"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to submit request for feedback"

End If
