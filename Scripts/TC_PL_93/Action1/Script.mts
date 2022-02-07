Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches").Click @@ script infofile_;_ZIP::ssf2.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches List").Exist(10) then
reporter.ReportEvent micPass,"Verify Branches","User should be able to view the location of all branches on google map"
else
reporter.ReportEvent micFail,"Verify Branches","User not able to see the location of all branches on google map"
End If



