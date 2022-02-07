Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"	
Datatable.SetCurrentRow(3)

strShortName=datatable.Value("ShortName",Global)
strAccountType=datatable.Value("AccountType",Global)
strServiceNumber=datatable.Value("ServiceNumber",Global)

call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Add New Beneficiary").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Ooredoo").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ShortName").Set strShortName @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Account Type *").Select strAccountType @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("serviceNumber").Set strServiceNumber @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf13.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to added new benificiery for prepaid successfully"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to add new benificiery"
End If



