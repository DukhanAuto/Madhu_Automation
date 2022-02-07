datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","Pre_Login","Global"
datatable.SetCurrentRow(5)
strATMCardNumber=datatable.Value("ATMCard_Number",Global)
strPIN=datatable.Value("PIN",Global)
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Register").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("ATM Card Number").Set strATMCardNumber @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("fake-placeholder").Set strPIN @@ script infofile_;_ZIP::ssf3.xml_;_
browser("Dukhan Bank").Page("Dukhan Bank").WebElement("I Accept Terms and Conditions").Click
wait 50 @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
if browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("pincode").Exist(10) then
	reporter.ReportEvent micPass,"Verify OTP for registerd mobile number","User should get pop up  like Please enter your verification code"
	else
	reporter.ReportEvent micFail,"Verify OTP for registerd mobile number","User unable to receive OTP for registerd mobile number"
End If
