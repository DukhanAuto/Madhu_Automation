Browser("Dukhan Bank").Page("Dukhan Bank").Link("Terms of Use").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Ok").Click @@ script infofile_;_ZIP::ssf2.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Login").Exist(5) then
reporter.ReportEvent micPass,"Verify OK button","User should be able to navigate to Login page once click on OK button"
else
reporter.ReportEvent micFail,"Verify OK button","User get an error unable to go to login page"

End If
