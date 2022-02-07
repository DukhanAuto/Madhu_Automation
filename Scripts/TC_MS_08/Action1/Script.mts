Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Stocks","Global"
datatable.SetCurrentRow(3)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Stocks").Click
if Browser("The Group").Page("The Group").WebElement("GroupPortal").Exist(10) then 
reporter.ReportEvent micPass,"Verify Group portal","User should be able to login sucessfully"
else
reporter.ReportEvent micFail ,"Verify Group portal","User unable to redirect to the group portal"
End If


