Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Settings").Click
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Manual Times Adjustments" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dhuhar").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dhuhar").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Dhuhar").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Maghrib").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Maghrib").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
Browser("Dukhan Bank").Page("Dukhan Bank").Sync
Browser("Dukhan Bank").Refresh @@ hightlight id_;_789008_;_script infofile_;_ZIP::ssf11.xml_;_
if browser("Dukhan Bank").Exist(5) then
	reporter.ReportEvent micPass,"Verify Submit button","User should see the changes in time stamp"
	else
	reporter.ReportEvent micFail,"Verify Submit button","User unable to see the changes in time stamp"
End If
 @@ hightlight id_;_789258_;_script infofile_;_ZIP::ssf10.xml_;_
