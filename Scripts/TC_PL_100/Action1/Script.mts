Browser("Dukhan Bank").Page("Dukhan Bank").Link("Products & Promotions").Click @@ script infofile_;_ZIP::ssf1.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Promotions").Exist(10) then
reporter.ReportEvent micPass,"Verify Product & Promotions","User should be able to see Product and promotions"
else
reporter.ReportEvent micFail,"Verify Product & Promotions","User unable to see product and promotions"

End If





