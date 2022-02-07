StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,"Global"
datatable.SetCurrentRow(2)
strMaturity=datatable.Value("Choose_Maturity",Global)
strAmount=datatable.Value("Amount",Global)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Deposit Calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Profit in advance deposit").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Maturity *").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Choose Maturity *").Select strMaturity @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set strAmount @@ script infofile_;_ZIP::ssf6.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("WebElement").Click @@ script infofile_;_ZIP::ssf7.xml_;_
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Information").Exist(10) then
reporter.ReportEvent micPass,"Verify Information","User able to see  message as 'This profit is a monthly approximate amount'"
End If

