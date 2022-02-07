Browser("Dukhan Bank").Page("Dukhan Bank").Link("Currency Converter").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebTabStrip("Tabs").Select "Exchange Rate"
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("WebEdit").Set "50" @@ script infofile_;_ZIP::ssf3.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("List of Countries").Exist(10) then
reporter.ReportEvent micPass,"Verify Converted amount for listed countries","User should be able to see Converted amount for listed countries based on user entered amount in QAR"
else
reporter.ReportEvent micFail,"Verify Converted amount for listed countries","User get an error unable to see converted amount for listed countries"
End If
