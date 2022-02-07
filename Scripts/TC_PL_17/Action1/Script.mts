datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(6)
strDebitCardNumber=datatable.Value("ATMCard_Number",Global)
strPIN=datatable.Value("PIN",Global)
strNewpassword=datatable.Value("NewPassword",Global)
strConfirmPassword=datatable.Value("ConfirmPassword",Global)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Forgot Password ?").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("debitCard").Set strDebitCardNumber @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("PIN Number").Set strPIN @@ script infofile_;_ZIP::ssf3.xml_;_
wait 60
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf4.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) Then
	reporter.ReportEvent micFail,"Verify error","User get an error 'invalid card or PIN'"
End If
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("password").Set strNewpassword @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("confirmPassword").Set strConfirmPassword
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Exist(10) then
	reporter.ReportEvent micPass,"Verify reset password","User should be able to update New Password "
	else
	reporter.ReportEvent micFail,"Verify reset password","User get an error message 'User name already exists'"
End If
