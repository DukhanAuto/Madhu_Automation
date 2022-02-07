Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(2)
strShortName=datatable.Value("ShortName",Global)
strQID=datatable.Value("QID",Global)
strServiceNumber=datatable.Value("ServiceNumber",Global)
call Login(strUserName,strPassword)
wait 20

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ShortName").Set strShortName @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQID @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("serviceNumber").Set strServiceNumber @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf10.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Exist(5) then
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf11.xml_;_
reporter.ReportEvent micPass,"Verify Yes button","User able to add new Vodafone postpaid beneficiary successfully"
else
reporter.ReportEvent micFail,"Verify Yes button","User get an error unable to add new benificiery"
End If
