datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(4)
call Login(strUserName,strPassword)
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("signOut").Exist(10) then
reporter.ReportEvent micPass,"Launch the application","User should be able to login successfully"
else
reporter.ReportEvent micFail,"Launch the application","User get an error unable to login the application"
End If
