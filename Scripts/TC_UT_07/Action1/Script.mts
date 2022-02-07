datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(2)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ATM / Branch Locator").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches List").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branches List").Select "Grand Hamad Street" @@ script infofile_;_ZIP::ssf11.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches ListGrand Hamad").Exist(10) then
reporter.ReportEvent micPass,"Verify Branches","User should be able to view the location of specific field in branches on google map"
else
reporter.ReportEvent micFail,"Verify Branches","User unable to see the location of specific field in branches"
End If
