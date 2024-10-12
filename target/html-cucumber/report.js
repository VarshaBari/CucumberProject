$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SimplilearnLogin.feature");
formatter.feature({
  "name": "This feature will validate the login scenarios for simplilearn.com",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.scenario({
  "name": "Validate the Login failure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user name",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_user_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user name as \"abc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_user_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login failure scenario as Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.step({
  "name": "I enter the user name as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter the password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "bsc@xyz.com",
        "Abcd@123",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "pqr@xyz.com",
        "Pqrd@123",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate the Login failure scenario as Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user name as \"bsc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_user_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Abcd@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login failure scenario as Scenario Outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the user name as \"pqr@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_user_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the password as \"Pqrd@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_enter_the_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Different login options present on the login screen",
  "description": "    \"@U_1000\"",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Simplilearn"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_click_on_the_Login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the below login options present on the screen",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_see_the_below_login_options_present_on_the_screen(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});