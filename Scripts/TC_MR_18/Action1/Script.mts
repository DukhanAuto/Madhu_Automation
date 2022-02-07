
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global"
datatable.SetCurrentRow(1)
strReasons=datatable.Value("Reasons",Global)
strDeliveryBranch=datatable.Value("DeliveryBranch",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Card Replacement").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Reasons *").Click @@ script infofile_;_ZIP::ssf6.xml_;_
 @@ script infofile_;_ZIP::ssf11.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Reasons *").Select strReasons @@ script infofile_;_ZIP::ssf12.xml_;_
' @@ script infofile_;_ZIP::ssf13.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Reasons *").Select strReasons @@ script infofile_;_ZIP::ssf14.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Reasons *").Select strReasons @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delivery Branch *").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Reasons *Lost Card").Select strDeliveryBranch
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 5
If browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) Then
	
reporter.ReportEvent micPass,"Success message displayed","User able to see success message as'your request has been submitted sucessfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to see success message"
End If





