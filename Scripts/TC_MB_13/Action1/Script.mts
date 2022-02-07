Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(3)
strAccountType=datatable.Value("AccountType",Global)
'strQID=datatable.Value("QID",Global)
strServiceNumber=datatable.Value("ServiceNumber",Global)

call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3

Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Update").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *Prepaid").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Account Type *Prepaid").Select strAccountType @@ script infofile_;_ZIP::ssf13.xml_;_
 @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("serviceNumber").Set strServiceNumber @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Update Beneficiary").Click
wait 10
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to update the ooredoo benificeiry details"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to update the benificeiry details"
End If
