@Simplilearn
Feature: This feature will validate the login scenarios for simplilearn.com

Scenario: Validate the Login failure scenario
    Given I have launched the application
    And I click on the Login link
    When I enter the user name 
    And I enter the password 
    And I click on the login button
    Then I should get the error message as "The email or password you have entered is invalid."

 Scenario: Validate the Login failure scenario using parameters
    Given I have launched the application
    And I click on the Login link
    When I enter the user name as "abc@xyz.com"
    And I enter the password as "Abc@1234"
    And I click on the login button
    Then I should get the error message as "The email or password you have entered is invalid."
    
    Scenario Outline: Validate the Login failure scenario as Scenario Outline
    Given I have launched the application
    And I click on the Login link
    When I enter the user name as "<UserName>"
    And I enter the password as "<Password>"
    And I click on the login button
    Then I should get the error message as "<Error>"
    
    Examples:
     | UserName    | Password | Error                                              |
      | bsc@xyz.com | Abcd@123 | The email or password you have entered is invalid. |
      | pqr@xyz.com | Pqrd@123 | The email or password you have entered is invalid. |
      
      Scenario: Validate Different login options present on the login screen
      
    "@U_1000"
    Given I have launched the application
    And I click on the Login link
    Then I see the below login options present on the screen
    |Google|
    |Facebook|
    |Linkedin|
    |Apple|

