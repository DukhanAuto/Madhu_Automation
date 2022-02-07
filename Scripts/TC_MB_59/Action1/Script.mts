Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(1) @@ script infofile_;_ZIP::ssf3.xml_;_
strSelectProgram=datatable.Value("SelectProgram",Global)
strCharityAmount=datatable.Value("CharityAmount",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Partner *").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("QATAR CHARITY").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait 4 @@ hightlight id_;_8783850_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Program *").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-disabled-item").Select strSelectProgram
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay From *").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click @@ script infofile_;_ZIP::ssf12.xml_;_
wait 3 @@ hightlight id_;_8783850_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set strCharityAmount
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf16.xml_;_
wait 4
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to see success message as 'payment has been done successfully'"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to see the success popup"
End If
