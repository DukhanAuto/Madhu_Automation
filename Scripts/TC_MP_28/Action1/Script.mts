Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Mpay","Global"
datatable.SetCurrentRow(8)
strAmount=datatable.Value("Amount",Global)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("QMP").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Transfer").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Transfer To My Account").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Select Account Or Card").Click
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Current").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 4 @@ hightlight id_;_14025640_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Amount").Set strAmount @@ script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf10.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf13.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Customer Cash").Exist(10) then
reporter.ReportEvent micPass,"Verify Debited amount","User able to see transfered amount is deducted from mpay wallet"
else
reporter.ReportEvent micFail,"Verify Debited amount","User get an error unable to see amount can be deducted from mpay wallet"
End If


