datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(1)
strATMCardNumber=datatable.Value("ATMCard_Number",Global)
strPIN=datatable.Value("PIN",Global)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Register").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ATM Card Number").Set strATMCardNumber @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("fake-placeholder").Set strPIN @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf4.xml_;_
wait 30
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
reporter.ReportEvent micFail,"Success message not displayed","User get an error message 'Card does not exists'"	
else
reporter.ReportEvent micPass,"Success message displayed","User should get an error message"
End If
