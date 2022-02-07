datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","EIPO","Global"
datatable.SetCurrentRow(4)
strShares=datatable.Value("NumberOfShares",StrsheetName)
strTitle=datatable.Value("Title",StrsheetName)
strSecondName=datatable.Value("Second_Name",StrsheetName)

call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("eIPO").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("sharesNumber").Set strShares @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Title*").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-disabled-app-title-mi").Select strTitle @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("secondName").Set strSecondName @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account*").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Choose_Account").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf13.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Profile").Exist(10) then
	reporter.ReportEvent micPass,"Verify Profile","User should be able to get redirected to Dash board"
	else
	reporter.ReportEvent micFail,"Verify Profile","User get an error Unable to redirect to dash board"
End If
 @@ script infofile_;_ZIP::ssf14.xml_;_
 @@ script infofile_;_ZIP::ssf15.xml_;_
