StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,StrsheetName
datatable.SetCurrentRow(1)
wait 5
strChooseMaturity=datatable.Value("Choose_Maturity",StrsheetName)
strAmount=datatable.Value("Amount",StrsheetName)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf3.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Deposit Calculator").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Time Deposit").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Choose Maturity *").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Choose Maturity *").Select strChooseMaturity @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set strAmount
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Information_Icon").Click @@ script infofile_;_ZIP::ssf9.xml_;_
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Information").Exist(10) then
reporter.ReportEvent micPass,"Verify Information","User able to see message as 'This profit is a monthly approximate amount'"
End If
