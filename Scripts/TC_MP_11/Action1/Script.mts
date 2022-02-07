Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(2)
strAmount=datatable.Value("Amount",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Transfer To QMP Wallet").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Transfer From *").Click
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click @@ script infofile_;_ZIP::ssf13.xml_;_
wait 3 @@ hightlight id_;_24119622_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set strAmount @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf12.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to see message  as 'Transfer has been completed successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to transfer myQMP wallet"
End If
