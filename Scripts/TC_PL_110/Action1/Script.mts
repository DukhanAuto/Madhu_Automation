Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("News").Click @@ script infofile_;_ZIP::ssf1.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Choose your news sources").Exist(10) then
reporter.ReportEvent micPass,"Verify News","User should able to see related news channels"
else
reporter.ReportEvent micFail,"Verify News","User get an error unable to see news channels"

End If
