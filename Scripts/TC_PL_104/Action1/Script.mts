Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Accounts").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Exceptional Savings Account").Click
if Browser("Exceptional Savings Account").Page("Exceptional Savings Account").WebElement("Exceptional Savings Account").Exist(10) then
reporter.ReportEvent micPass,"Verify Different types of Accounts","User should be able to view the new tab having the details of selected account"
else
reporter.ReportEvent micFail,"Verify Different types of Accounts","User get an error  unable to go to new tab"
End If

