Datatable.ImportSheet "C:\GitHub\DukhanWeb_Automation\Test Data\Test Data.xlsx","PostLogin","Global" @@ script infofile_;_ZIP::ssf3.xml_;_
datatable.SetCurrentRow(1)
strOldPassword=datatable.Value("OldPassword",Global)
strNewPassword=datatable.Value("NewPassword",Global)
strConfirmPassword=datatable.Value("ConfirmPassword",Global)
call Login(strUserName,strPassword)
wait 20
Browser("Dukhan Bank").Page("Dukhan Bank").Link("Settings").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Change Password").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("oldPassword").Set strOldPassword @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("password_2").Set strNewPassword @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Dukhan Bank").Page("Dukhan Bank").WebEdit("confirmPassword").Set strConfirmPassword
wait 3
Browser("Dukhan Bank").Page("Dukhan Bank").WebButton("Update").Click @@ script infofile_;_ZIP::ssf9.xml_;_
if browser("Dukhan Bank").Page("Dukhan Bank").WebElement("Success").Exist(10) then
reporter.ReportEvent micPass,"Success message displayed","User able to Updated password sucessfully"
else
reporter.ReportEvent micFail,"Success message not displayed","User get an error unable to Update password"
End If



