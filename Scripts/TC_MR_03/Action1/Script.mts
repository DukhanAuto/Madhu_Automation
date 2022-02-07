
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global"
datatable.SetCurrentRow(1)
strDeliveryBranch=datatable.Value("DeliveryBranch",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Cheque Book").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account*").Click
wait 3
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ChooseAccount").Click

Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ChooseAccount").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delivery Branch*").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-card-item4").Select strDeliveryBranch @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf8.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 5
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then

reporter.ReportEvent micPass,"Success message displayed","User able to see 'CRM request sucessfully submited"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to see success message"

End If




 @@ script infofile_;_ZIP::ssf11.xml_;_
