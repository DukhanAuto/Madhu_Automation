Browser("Dukhan Bank").Page("Dukhan Bank").Link("FAQ").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("What do I do if I forget").Click @@ script infofile_;_ZIP::ssf2.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Click on “Forgot Password”,").Exist(10) then
reporter.ReportEvent micPass,"Verify FAQ","User should be able to view Frequently asked questions and with answers"
else
reporter.ReportEvent micFail,"Verify FAQ","User unable to see frequently asked questions with answers"
End If

