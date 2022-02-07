Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(5) @@ script infofile_;_ZIP::ssf3.xml_;_
strShortName=datatable.Value("ShortName",Global)
strQID=datatable.Value("QID",Global)
strServiceNumber=datatable.Value("ServiceNumber",Global)
call Login(strUserName,strPassword)
wait 20 
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ShortNumber").Set strShortName @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQID @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("serviceNumber").Set strServiceNumber @@ script infofile_;_ZIP::ssf9.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 4
browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click
wait 4
browser("Dukhan Bank").Page("Dukhan Bank").Link("Beneficiaries").Click
wait 4
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("NewBeneficiery").Exist(10) then
reporter.ReportEvent micPass,"Verify NewBeneficiery","User able to add new Ooredoo postpaid beneficiary successfully"
else
reporter.ReportEvent micFail,"Verify NewBeneficiery","User get an error not able to add new benificiery"
End If




