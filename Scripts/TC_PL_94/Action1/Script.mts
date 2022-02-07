Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches List").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branches List").Select "Nearest" @@ script infofile_;_ZIP::ssf4.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches ListNearest").Exist(10) then
reporter.ReportEvent micPass,"Verify Nearest Branches","User should be able to view the location of nearest branches on google map"
else
reporter.ReportEvent micFail,"Verify Nearest Branches","User not able to see the location of nearest branches on google map"
End If



