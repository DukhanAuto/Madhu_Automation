datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(5)
call Login(strUserName,strPassword) @@ script infofile_;_ZIP::ssf3.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
	reporter.ReportEvent micFail,"Success message not displayed","User should get error Invalid User name or password"
	else
	reporter.ReportEvent micPass,"Success message displayed","User should get an error"
End If
