Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(6) @@ script infofile_;_ZIP::ssf3.xml_;_
strShortName=datatable.Value("ShortName",Global)
strServiceNumber=datatable.Value("ServiceNumber",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Hala Top Up" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ShortName").Set strShortName @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("serviceNumber").Set strServiceNumber
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 4
browser("Dukhan Bank").Page("Dukhan Bank").Link("Beneficiaries").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("New Beneficiery").Exist(10) then
reporter.ReportEvent micPass,"Verify New Beneficiery","User able to add a new Ooredoo prepaid beneficiary successfully"
else
reporter.ReportEvent micFail,"Verify New Beneficiery","User get an error unable add new ooredoo benificiery"
End If
