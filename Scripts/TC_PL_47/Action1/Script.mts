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




Browser("Dukhan Bank").Page("Dukhan Bank").Link("Open an Account").Click @@ script infofile_;_ZIP::ssf22.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-account-type").Select StrAccountType
If ucase(trim(StrQatari)) ="YES" Then
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "OFF"
	else
		Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON"
	End If

Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Monthly Income").Select StrMonthlyIncome @@ script infofile_;_ZIP::ssf26.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branch *").Click @@ script infofile_;_ZIP::ssf27.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branch *").Select StrBranch @@ script infofile_;_ZIP::ssf28.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf29.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("firstName").Set StrFirstName @@ script infofile_;_ZIP::ssf30.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("middleName").Set StrMiddleName @@ script infofile_;_ZIP::ssf31.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("lastName").Set StrLastName @@ script infofile_;_ZIP::ssf32.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("email").Set StrEmail @@ script infofile_;_ZIP::ssf33.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("qid").Set StrQID @@ script infofile_;_ZIP::ssf34.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("passport").Set StrPassport @@ script infofile_;_ZIP::ssf35.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("mobileNumber").Set StrMobileNumber @@ script infofile_;_ZIP::ssf36.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("companyName").Set "dukhan" @@ script infofile_;_ZIP::ssf37.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("address").Set StrAddress @@ script infofile_;_ZIP::ssf38.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf39.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Front").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf40.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("QID_Image_Back").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf41.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("Salary_certificate").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf42.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebFile("Passport").Set "Capture.PNG" @@ script infofile_;_ZIP::ssf43.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebCheckBox("WebCheckBox").Set "ON" @@ script infofile_;_ZIP::ssf44.xml_;_
wait 40
	Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf45.xml_;_
	wait 3
	if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
	reporter.ReportEvent micPass,"Success message displayed","User able to see success message as 'your request has been recieved,your ticket number is xxxxx'"
	else
		reporter.ReportEvent micFail,"Success message not displayed","User get an error message"
	End If




