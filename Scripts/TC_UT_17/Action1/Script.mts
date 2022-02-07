datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
StrReason=datatable.Value("Reason",Global)
datatable.SetCurrentRow(5)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Contact Us").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Reason").Set "Unable to login my account"
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf7.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User should get Success pop up like 'Request has been sent successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to see any message"
End If
