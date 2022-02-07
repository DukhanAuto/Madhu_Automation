Browser("Dukhan Bank").Page("Dukhan Bank").Link("Find Us").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMs_2").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("ATMs").Select "Cash Withdrawal" @@ script infofile_;_ZIP::ssf4.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("ATMsCash Withdrawal").Exist(10) then
reporter.ReportEvent micPass,"Verify cash withdrawal ATM's","User should be able to view the location of Cash Withdrawal ATMs on google map"
else
reporter.ReportEvent micFail,"Verify cash withdrawal ATM's","User unable to view the location of cash withdrawal ATM's on google map"
End If




