Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","PostLogin","Global"
datatable.SetCurrentRow(2)
call Login(strUserName,strPassword)
wait 20 @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Settings").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Manage Favorites").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My Cards").Click @@ script infofile_;_ZIP::ssf7.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("My CardsRemove From Favorites").Exist(10) then
reporter.ReportEvent micPass,"Verify Favorites","User should be able to add Icons to favourites successfully"
else
reporter.ReportEvent micFail,"Verify Favorites","User unable to add icons to faviorites list"
End If
