Browser("Dukhan Bank").Page("Dukhan Bank").Link("Currency Converter").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("currencyIhave").Set "60" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("AED").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-currency").Select "AUD"
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("1 QAR = 0.377 AUD").Exist(10) then
reporter.ReportEvent micPass,"Verify converted rate of QAR","User should be able to view the rate of selected currency in QAR in QAR field"
else
reporter.ReportEvent micFail,"Verify converted rate of QAR","User unable to view the rate of selected currency in QAR field"
End If




