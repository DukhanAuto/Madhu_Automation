Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Credit Cards").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("World Mastercard Credit").Click
if Browser("World Mastercard Credit").Page("World Mastercard Credit").WebElement("World Mastercard Credit").Exist(10) then
reporter.ReportEvent micPass,"Verify Credit Cards","User should be able to view the new tab having the details of selected credit card"
else
reporter.ReportEvent micFail,"Verify Credit Cards","User should get an error  unable to go to new tab"

End If








