Browser("Dukhan Bank").Page("Dukhan Bank").Link("FAQ").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Search").Set "How do I login to my account"
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf3.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("You can login using the").Exist(10) then
reporter.ReportEvent micPass,"Verify related FAQ's","User should be able to view the list of questions available for the entered word"
else
reporter.ReportEvent micFail,"Verify related FAQ's","User unable to see the list of questions available for the entered word"
End If

 






