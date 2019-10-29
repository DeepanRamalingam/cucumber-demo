Feature: User Login Automation


Scenario Outline:: User login failure - test-1
Given user navigates to the login page
When enters username with <username> and password with <password>
Then finds the error message
And close the browser

Examples:
|username|password|
|Admin|admin234|
|Deepan|Deepan123|
|stackuser|user123|
|Admin|admin123|







