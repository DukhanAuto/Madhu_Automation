Browser("Dukhan Bank").Page("Dukhan Bank").Link("Open an Account").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Account Type *").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("dropdown-account-type").Select "Current" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Select Monthly Income").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Select Monthly Income").Select "QAR 10,000 - QAR 14,999" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Branch *").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebMenu("Branch *").Select "Al Rayyan Branch" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Next").Click @@ script infofile_;_ZIP::ssf8.xml_;_
wait 2
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Previous").Click @@ script infofile_;_ZIP::ssf9.xml_;_
wait 2
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Calculator").Click @@ script infofile_;_ZIP::ssf10.xml_;_
If browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Exist(10) Then	
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Yes").Click @@ script infofile_;_ZIP::ssf11.xml_;_
reporter.ReportEvent micPass,"Verify Yes or No Options","User able to redirect to another tab"
ElseIf browser("Dukhan Bank").Page("Dukhan Bank").WebButton("No").Exist(10) Then
browser("Dukhan Bank").Page("Dukhan Bank").WebButton("No").Click
reporter.ReportEvent micPass,"Verify Yes or No options","should  not redirect and land on same page"
End If
