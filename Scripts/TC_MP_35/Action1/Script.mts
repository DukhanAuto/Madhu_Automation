Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(9)
strMobileNumber=datatable.Value("MobileNumber",Global)
strAmount=datatable.Value("Amount",Global)

call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf29.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf30.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click @@ script infofile_;_ZIP::ssf31.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Pay Another QMP Wallet").Click @@ script infofile_;_ZIP::ssf32.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("MobileNumber").Set strMobileNumber @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set strAmount @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf36.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click
wait 3
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to see success message 'your payment request is submited successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable Pay amount to 'Mpay Another Wallet'"
End If
