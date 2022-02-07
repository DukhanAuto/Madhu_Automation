''This script is used to login scenario
''====================================================
datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(1)
Call Login(strUserName,strPassword)
wait 20
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("signOut").Exist(10) then
reporter.ReportEvent micPass,"Launch the application","User should be logged in successfully"
else
reporter.ReportEvent micFail,"Launch the application","User get an error unable to login"
End If



