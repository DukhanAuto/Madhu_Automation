Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Stocks","Global" @@ script infofile_;_ZIP::ssf3.xml_;_
datatable.SetCurrentRow(4)
StrTradeNIN=datatable.Value("TradeNIN_Number",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Stocks").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Skip").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("trade").Set StrTradeNIN @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Selected Account*").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON"
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf10.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
reporter.ReportEvent micFail,"Success message not displayed","User should be able to see error message for NIN number"
End If
