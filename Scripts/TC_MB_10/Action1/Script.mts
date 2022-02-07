StrsheetName = "My Bills"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,"Global"

Datatable.SetCurrentRow(4)

strShortName=datatable.Value("ShortName",Global)
strElectricityNumber=datatable.Value("ElectricityNumber",Global)
strQIDKahramma=datatable.Value("QID_Kahramma",Global)

call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Add New Beneficiary").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Kahramaa").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ShortName").Set strShortName @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ElectricityNumber").Set strElectricityNumber @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQIDKahramma @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
'Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 4
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to added new benificiery for kahramma"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to add new benificiery"
End If
