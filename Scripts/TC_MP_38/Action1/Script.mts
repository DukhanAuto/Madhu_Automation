Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(10)
strAlias=datatable.Value("Alias",Global)
strAmount=datatable.Value("Amount",Global)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Pay Another QMP Wallet").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebRadioGroup("transferTo").Select "#1" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Alias").Set strAlias @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set strAmount @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click
wait 3
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to see success message as 'your payment request is submiited successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to Pay amount to 'Mpay Another Wallet'"
End If



