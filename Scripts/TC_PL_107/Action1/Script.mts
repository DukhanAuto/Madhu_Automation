If browser("Dukhan Bank").Page("Dukhan Bank").Link("Information").Exist(10) Then
	
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Information").Click @@ script infofile_;_ZIP::ssf1.xml_;_
reporter.ReportEvent micPass,"Verify Information","User should be able to redirect to Dukhan bank website"
else
reporter.ReportEvent micFail,"Verify Information","User unable to redirect to dukhan bank website"

End If
