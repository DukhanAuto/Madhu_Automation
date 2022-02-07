Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Financing").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Car Finance").Click
if Browser("Car Finance | Dukhan Bank").Page("Car Finance | Dukhan Bank").WebElement("Car Finance").Exist(10) then
reporter.ReportEvent micPass,"Verify Financies","User should be able to view the new tab having the details of selected finance"
else
reporter.ReportEvent micFail,"Verify Financies","User should get error unable to go to new tab"

End If
