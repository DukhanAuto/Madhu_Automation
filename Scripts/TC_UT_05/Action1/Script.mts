
datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","UsefulTools","Global"
datatable.SetCurrentRow(2)
call Login(strUserName,strPassword)
wait 20
 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Useful Tools").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("ATM / Branch Locator").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs_2").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
	Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("ATMs").Select "Cash Deposit"
	if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMsCash Deposit").Exist(10) then
	reporter.ReportEvent micPass,"ATMsCash Deposit"," User should be able to view the location of specific field in ATMs on google map"
	else
	reporter.ReportEvent micFail,"ATMsCash Deposit","User unable to see the location of specific field"
End If

