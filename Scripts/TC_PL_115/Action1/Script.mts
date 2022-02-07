 @@ hightlight id_;_8979172_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Prayer_Times_Settings").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Calculation_Method_RadioButton").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 5	
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ hightlight id_;_8979172_;_script infofile_;_ZIP::ssf8.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Login").Exist(10) then
reporter.ReportEvent micPass,"Verify Submit button","User should be able to redirected to login screen"
else
reporter.ReportEvent micFail,"Verify Submit button","User get an error unable to redirect login screen" 

End If
