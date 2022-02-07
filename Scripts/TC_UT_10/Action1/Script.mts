datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(3)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("FAQ").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("How do I login to my account?").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("You can login using the").Exist(10) then
reporter.ReportEvent micPass,"Verify Any query in FAQ","User should able to see the message under particular query"
else
reporter.ReportEvent micFail,"Verify Any query in FAQ","User get an error unable to see the message"
End If


