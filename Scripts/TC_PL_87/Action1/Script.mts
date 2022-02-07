Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs").Click
if Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs").Exist(5) then
reporter.ReportEvent micPass,"Verify ATM's","User should be able to view the location of all the ATMs on google map"
else
reporter.ReportEvent micFail,"Verify ATM's","User unable to see the location of all the ATM's on google map"
End If


