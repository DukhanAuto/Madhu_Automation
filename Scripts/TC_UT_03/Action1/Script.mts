datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(1)
call Login(strUserName,strPassword)
wait 20

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ATM / Branch Locator").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ALL").Exist(5) Then
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ALL").Click
reporter.ReportEvent micPass,"Verify 'ALL' Button","User should be able to view the location of all the ATMs on google map"
else
reporter.ReportEvent micFail,"Verify 'ALL'Button","User unable to see the location of all ATM's on google map"
End If
 @@ script infofile_;_ZIP::ssf6.xml_;_
