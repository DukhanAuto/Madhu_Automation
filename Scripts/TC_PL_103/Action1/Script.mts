Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Banking Services").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Banking Services_2").Click
if Browser("Banking Services | Dukhan").Page("Banking Services | Dukhan").WebElement("Banking Services").Exist(10) then
reporter.ReportEvent micPass,"Verify Banking services","User should be able to view the new tab having the details of Banking Services"
else
reporter.ReportEvent micFail,"Verify Banking services","User unable to see the banking services"

End If

