Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Finance Type *").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Finance Type *").Select "Vehicle Finance" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Nationality *").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Nationality *").Select "Non Qatari" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("COMMON.FINANCE_AMOUNT").Set "20000" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Installment Years *").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Installment Years *").Select "3" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Apply Now").Click @@ script infofile_;_ZIP::ssf10.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Full Name").Set "test" @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Full Name_2").Set "25545667889"
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("Mobile Number").Set "89898989" @@ script infofile_;_ZIP::ssf13.xml_;_
if Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Submit").Exist(10) then
reporter.ReportEvent micPass,"Verify Submit button","User able to see 'Submit' button is enabled mode"
else
reporter.ReportEvent micFail,"Verify Submit button","User get an error message"
End If

