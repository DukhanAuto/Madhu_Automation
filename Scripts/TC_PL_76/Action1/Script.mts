StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,"Global"
datatable.SetCurrentRow(3)
strFinanceType=datatable.Value("FinanceType",Global)
strFinanceAmount=datatable.Value("FinanceAmount",Global)
strNationality=datatable.Value("Nationality",Global) @@ script infofile_;_ZIP::ssf4.xml_;_
strInstallmentYears=datatable.Value("InstallmentYears",Global)
strFullName=datatable.Value("Full_Name",Global)
strQID=datatable.Value("QID",Global)
strMobileNumber=datatable.Value("Mobile_Number",Global)

 
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Finance Calculator").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Finance Type *").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Finance Type *").Select strFinanceType @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Nationality *").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Nationality *").Select strNationality @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("FINANCE_AMOUNT").Set strFinanceAmount @@ script infofile_;_ZIP::ssf11.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Installment Years *").Click @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Installment Years *").Select strInstallmentYears @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Full Name").Set strFullName @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQID @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Mobile Number").Set strMobileNumber @@ script infofile_;_ZIP::ssf18.xml_;_
wait 60
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf19.xml_;_
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(10) then
reporter.ReportEvent micFail,"Success message not displayed","User get an error message"
End If

