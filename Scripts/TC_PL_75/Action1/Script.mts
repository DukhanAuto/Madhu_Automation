StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,StrsheetName
datatable.SetCurrentRow(1)
wait 5
strFinanceType=datatable.Value("FinanceType",StrsheetName)
strNationality=datatable.Value("Nationality",StrsheetName)
strFinanceAmount=datatable.Value("FinanceAmount",StrsheetName)
strInstallmentYears=datatable.Value("InstallmentYears",StrsheetName)
strFullName=datatable.Value("Full_Name",StrsheetName)
strQID=datatable.Value("QID",StrsheetName)
strMobileNumber=datatable.Value("Mobile_Number",StrsheetName)

Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Finance Calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Finance Type *").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Finance Type *").Select strFinanceType @@ script infofile_;_ZIP::ssf4.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Nationality *").Exist(10) Then
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Nationality *").Click @@ script infofile_;_ZIP::ssf5.xml_;_

Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Nationality *").Select strNationality @@ script infofile_;_ZIP::ssf6.xml_;_
End If
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Finance_Amount(QAR)").Set strFinanceAmount @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Installment Years *").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Installment Years *").Select strInstallmentYears @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Full Name").Set strFullName @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("QID").Set strQID @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Mobile Number").Set strMobileNumber @@ script infofile_;_ZIP::ssf13.xml_;_
wait 30

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf14.xml_;_

if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Error").Exist(5) then

reporter.ReportEvent micFail,"Success message not displayed","User get an error message" 
End If
