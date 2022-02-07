Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dukhan Bank Products").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Time Deposits").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Profit in advance deposit").Click
if Browser("Profit in advance deposit").Page("Profit in advance deposit").WebElement("Profit in advance deposit").Exist(10) then
reporter.ReportEvent micPass,"Verify different types of Time deposits","User should be able to view the new tab having the details of selected time deposit"
else
reporter.ReportEvent micFail,"Verify different types of Time deposits","User get an error unable to go to new tab"
End If

