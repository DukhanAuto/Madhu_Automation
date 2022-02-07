Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches List").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branches List").Select "Grand Hamad Street" @@ script infofile_;_ZIP::ssf4.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branches ListGrand Hamad").Exist(10) then
reporter.ReportEvent micPass,"Verify specific branch","User should be able to view the location of selected branch on google map"
else
reporter.ReportEvent micFail,"Verify specific branch","User not able to see the location of selected branch on google map"
End If


