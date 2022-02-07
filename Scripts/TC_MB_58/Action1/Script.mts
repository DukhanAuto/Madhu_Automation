Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","My Bills","Global"
datatable.SetCurrentRow(2) @@ script infofile_;_ZIP::ssf3.xml_;_
strSelectProgram=datatable.Value("SelectProgram",Global)
strCharityAmount=datatable.Value("CharityAmount",Global)
strFilePath=datatable.Value("File_Path",Global)
call Login(strUserName,strPassword)
wait 20

Browser("Dukhan Bank").Page("Dukhan Bank").Link("My Bills").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("item-").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Partner *").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("QATAR CHARITY").Click @@ hightlight id_;_2296932_;_script infofile_;_ZIP::ssf8.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Program *").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-disabled-item").Select strSelectProgram @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay From *").Click @@ script infofile_;_ZIP::ssf11.xml_;_
wait 3
'Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000026211").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("200000328809").Click
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("amount").Set strCharityAmount @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Pay").Click @@ script infofile_;_ZIP::ssf15.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Confirm").Click @@ script infofile_;_ZIP::ssf16.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("downloadP").Click @@ script infofile_;_ZIP::ssf17.xml_;_
wait 3
if browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Exist(5) then
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("PDF").Click @@ script infofile_;_ZIP::ssf18.xml_;_
reporter.ReportEvent micPass,"Verify PDF button","User able to download PDF and able to see payment details"
else
reporter.ReportEvent micFail,"Verify PDF button","User get an error unable to download PDF"
End If
call SaveDownloadfile(StrFilepath)
