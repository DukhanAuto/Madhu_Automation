StrsheetName = "Pre_Login"
Datatable.AddSheet(StrsheetName)
Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx",StrsheetName,StrsheetName
TotalRows = Datatable.GetSheet(StrsheetName).GetRowCount



Datatable.SetCurrentRow(1)
	
StrAccountType = Datatable.Value("ACCOUNT_TYPE",StrsheetName)
StrQatari = Datatable.Value("QATARI",StrsheetName)
StrMonthlyIncome = Datatable.Value("MONTHLY_INCOME",StrsheetName)
StrBranch = Datatable.Value("BRANCH",StrsheetName)
StrFirstName = Datatable.Value("FIRST_NAME",StrsheetName)
StrMiddleName = Datatable.Value("MIDDLE_NAME",StrsheetName)
StrLastName = Datatable.Value("LAST_NAME",StrsheetName)
StrEmail = Datatable.Value("EMAIL",StrsheetName)
StrQID = Datatable.Value("QID",StrsheetName)
StrPassport = Datatable.Value("PASSPORT",StrsheetName)
StrMobileNumber = Datatable.Value("MOBILE_NUMBER",StrsheetName)
StrCompanyName = Datatable.Value("COMPANY_NAME",StrsheetName)
StrAddress = Datatable.Value("ADDRESS",StrsheetName)


Browser("Dukhan Bank").Page("Dukhan Bank").Link("Open an Account").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-account-type").Select StrAccountType
If ucase(trim(StrQatari)) ="YES" Then
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "OFF"
	else
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON"
	End If

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Monthly Income").Select StrMonthlyIncome
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branch *").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branch *").Select StrBranch
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("firstName").Set StrFirstName
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("middleName").Set StrMiddleName
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("lastName").Set StrLastName
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("email").Set StrEmail
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("qid").Set StrQID
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("passport").Set StrPassport
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("mobileNumber").Set StrMobileNumber
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("companyName").Set StrCompanyName
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("address").Set StrAddress
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Front").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf30.xml_;_
wait 3
browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Back").Set "Capture.PNG"
wait 3
browser("Dukhan Bank").Page("Dukhan Bank").WebFile("Salary_Certificate").Set "Capture.PNG"
wait 3
browser("Dukhan Bank").Page("Dukhan Bank").WebFile("PassPort").Set "Capture.PNG"
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON"
wait 40
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click
wait 5
if Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","user able to see success message as 'Your request has been recevied,your ticket number is xxxxxxx'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error message"
End If


