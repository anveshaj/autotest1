Feature: The purpose of this feature is to validate the profile is getting updated when some fields are changed and saved.

As a user,
when i perofrm some change in my online profile and save it,
The changes made should be reflected and profile last updated should be made to today.

#Scenario: this is to validate the login of the account
  #Given the user opnes browsetr and navigates to URL
  #When the user enters the username and password
    #And cliks the login button 
  #Then validate that the user is logged in
  #
  #
 #Scenario Outline: This is to validate the user is able to login sucessfully.
  #Given user opens the browser and navigates to specified URL
  #When the user enters the username <username> and password <password>
    #And Clicks on login button
  #Then vlidate that the user is logged-in.
    #And click on logout
    #And Exit the browser.
  #Examples:
  #| username | password |
  #| "chandu.siddhapuram@gmail.com" | "Chandu@555" |
  #| "sudhaguttikonda28@gmail.com" | "Sudha2811*" |
  #| "rushi.solleti@gmail.com" | "Gupta@1994012" |
  #
  #
Scenario Outline: this scenario is to validate that after updating the profile, the last updated feild is changed to "today".
  Given user opens the browser and navigates to specified URL
  When the user enters the username <username> and password <password>
    And Clicks on login button
    And Clicks on resumeheadline edit icon
    And updates the resume headline 
  Then validate that the userprofile last updated date is changed to today.
    And click on logout
    And Exit the browser.
  Examples:
  | username | password |
  | "chandu.siddhapuram@gmail.com" | "Chandu@55" |
  #| "sudhaguttikonda28@gmail.com" | "Sudha2811*" |
  #| "rushi.solleti@gmail.com" | "Gupta@1994012" |
  #| "sreevidya.amarapalli@gmail.com" | "sree7044" |
  