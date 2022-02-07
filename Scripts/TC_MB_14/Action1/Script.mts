Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(2) @@ script infofile_;_ZIP::ssf3.xml_;_

call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delete").Click
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf7.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Add New Beneficiary").Exist(10) then @@ script infofile_;_ZIP::ssf8.xml_;_
reporter.ReportEvent micPass,"Delete Benificiery","User able to delete benificiery succesfully"
else
reporter.ReportEvent micFail,"Delete Benificiery","User get an error unable to delete benificiery from benificiery list"
End If

