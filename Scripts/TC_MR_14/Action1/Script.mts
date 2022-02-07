Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","MyRequests","Global" @@ script infofile_;_ZIP::ssf20.xml_;_
datatable.SetCurrentRow(2)

strCardType=datatable.Value("CardType",Global)
strName=datatable.Value("Name",Global)
strLimit=datatable.Value("Card_Limit",Global)
strmonthlyIncome=datatable.Value("MonthlyIncome",Global)
strDeliveryBranch=datatable.Value("DeliveryBranch",Global)
strMonthlyRepayment=datatable.Value("Monthly_Repayment",Global)
strRemarks=datatable.Value("Remarks",Global)

call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Requests").Click @@ script infofile_;_ZIP::ssf21.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("New Credit Card").Click @@ script infofile_;_ZIP::ssf22.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Card Type *").Click @@ script infofile_;_ZIP::ssf23.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *").Select strCardType @@ script infofile_;_ZIP::ssf24.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("name").Set strName @@ script infofile_;_ZIP::ssf25.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("limit").Set strLimit @@ script infofile_;_ZIP::ssf26.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf27.xml_;_
wait 3
'browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Master Card").Select strmonthlyIncome
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Visa Card").Select strmonthlyIncome @@ script infofile_;_ZIP::ssf28.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Delivery Branch *").Click @@ script infofile_;_ZIP::ssf29.xml_;_
wait 3
'browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Master Card_2").Select strDeliveryBranch
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Visa Card_2").Select strDeliveryBranch @@ script infofile_;_ZIP::ssf30.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Monthly Repayment").Click @@ script infofile_;_ZIP::ssf31.xml_;_
'browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Master Card_3").Select strMonthlyRepayment
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Card Type *Visa Card_3").Select strMonthlyRepayment @@ script infofile_;_ZIP::ssf32.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("remarks").Set strRemarks
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf34.xml_;_
wait 5
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then

reporter.ReportEvent micPass,"Success message displayed","User able to see success message as 'CRM Request submitted sucessfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to see success message"

End If


