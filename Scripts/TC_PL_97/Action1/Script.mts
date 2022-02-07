
StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,StrsheetName
datatable.SetCurrentRow(7)
strFullName=datatable.Value("Full_Name",StrsheetName)
strQID=datatable.Value("QID",StrsheetName)
strEmail=datatable.Value("EMAIL",StrsheetName)
strMobileNumber=datatable.Value("Mobile_Number",StrsheetName)
strReason=datatable.Value("Reason",StrsheetName)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Contact Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("FullName").Set strFullName @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQID @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Email").Set strEmail @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("MobileNumber").Set strMobileNumber @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Reason").Set strReason @@ script infofile_;_ZIP::ssf6.xml_;_
wait 30
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 10
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
reporter.ReportEvent micFail,"Success message not displayed","User get an error message"
End If

