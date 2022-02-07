Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs_2").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("ATMs").Select "Nearest" @@ script infofile_;_ZIP::ssf4.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMsNearest").Exist(10) then
reporter.ReportEvent micPass,"Verify Nearest ATM's","User should be able to view the location of nearest ATMs on google map"
else
reporter.ReportEvent micFail,"Verify Nearest ATM's","User unable to see the location of nearest ATM's on google map"
End If
