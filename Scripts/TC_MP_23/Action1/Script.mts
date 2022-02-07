Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(7)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Accounts").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Accounts").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Current").Click
If browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Current_Account").Exist(10) Then
	
reporter.ReportEvent micPass,"Verify My Accounts","User able to see transfered amount added to My Account"
else
reporter.ReportEvent micFail,"Verify My Accounts","User get an error unable to see added amount in my account"
End If
