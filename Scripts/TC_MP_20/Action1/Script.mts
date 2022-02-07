Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(4)
strMobileNumber=datatable.Value("MobileNumber",Global)
strAmount=datatable.Value("Amount",Global)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Transfer To My Account").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Select Account Or Card").Click
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("100000010916").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 5 @@ hightlight id_;_18025194_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set strAmount @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 5
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to see message as 'Transfer has been completed successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to transfer amount from my wallet to My account"
End If
