Feature: Conduit Existing user Sign in UI testing

# Gherkin instructions - features

Background:
    Given user is on the Sign in page

Scenario: User open Sign in page
    Given user is on home page
    When user click on Sign in text on navigation bar
    Then user is redirected to Sign in page


Scenario: Disabled Sign in button
    And input fields for sign in credentials are empty
    Then sign in button is disabled

Scenario: User successfully Sign in with valid credentials
    When user enters valid sign in credentials
    And user click sign in button
    Then user is redirected to home page and have username displayed

Scenario: User see error message for invalid email
    When user enter sign in credentials with invalid email
    And user click sign in button
    Then error message about invalid credentials is shown

Scenario: User see error message for invalid password
    When user enter sign in credentials with invalid password
    And user click sign in button
    Then error message about invalid credentials is shown


Scenario: User see error message in case for all invalid data
    When user enter sign in credentials with all invalid data
    And user click sign in button
    Then error message about invalid credentials is shown