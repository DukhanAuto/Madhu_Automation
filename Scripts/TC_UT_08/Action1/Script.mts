datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Quick Links").Click @@ script infofile_;_ZIP::ssf12.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Social Media").Exist(10) then
reporter.ReportEvent micPass,"Verify Quick Links","user should  able to see Social Media and Barwa Bank links"
else
reporter.ReportEvent micFail,"Verify Quick Links","User unable to see social media and barwa bank links"
End If

