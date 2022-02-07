Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","EIPO","Global"
datatable.SetCurrentRow(1)
strShares=datatable.Value("NumberOfShares",StrsheetName)
strTitle=datatable.Value("Title",StrsheetName)
strSecondname=datatable.Value("Second_Name",StrsheetName)

call Login(strUserName,strPassword)
wait 20
 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("eIPO").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("sharesNumber").Set strShares @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Title*").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-disabled-app-title-mi").Select strTitle @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("secondName").Set strSecondname @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Debit Account*").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Choose_Account").Click @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf13.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("eIPO_Details").Click @@ script infofile_;_ZIP::ssf14.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(15) then
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click @@ script infofile_;_ZIP::ssf15.xml_;_
reporter.ReportEvent micPass,"Verify PDF","User should be able to download PDF format sucessfully"
else
reporter.ReportEvent micFail,"Verify PDF","User get an error unable to download PDF"
End If


