datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(2)
strDebitCardNumber=datatable.Value("ATMCard_Number",Global)
strPIN=datatable.Value("PIN",Global)
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Forgot Password ?").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("debitCard").Set strDebitCardNumber @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("PIN Number").Set strPIN @@ script infofile_;_ZIP::ssf3.xml_;_
wait 50
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
	reporter.ReportEvent micFail,"Success message not displayed","User should get an error message 'Card does not exists'"
	else
	reporter.ReportEvent micPass,"Success message displayed","User should get an error"
End If
