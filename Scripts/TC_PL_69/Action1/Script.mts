Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 4
Browser("Dukhan Bank").Page("Dukhan Bank").Image("calculator").Click @@ script infofile_;_ZIP::ssf2.xml_;_
wait 5
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Finance Type *").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Finance Type *").Select "Vehicle Finance" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Nationality *").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Nationality *").Select "Qatari" @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("COMMON.FINANCE_AMOUNT").Set "20000" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Installment Years *").Click
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Installment Years *").Select "2" @@ script infofile_;_ZIP::ssf9.xml_;_
if Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Apply Now").Exist(10) then
reporter.ReportEvent micPass,"Verify Apply Now button","User able to see 'Apply Now' button is enabled"
else
reporter.ReportEvent micFail,"Verify Apply Now button","User get an error message"
End If

