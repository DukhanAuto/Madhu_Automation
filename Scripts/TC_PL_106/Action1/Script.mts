Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Promotions").Click @@ script infofile_;_ZIP::ssf2.xml_;_

if Browser("Dukhan Bank").Page("Dukhan Bank").Link("News").Exist(10) then
reporter.ReportEvent micPass,"Verify News","User should be able to view the news feed of promotions"
else
reporter.ReportEvent micFail,"Verify News","User unable to see the news feed of promotions"

End If
