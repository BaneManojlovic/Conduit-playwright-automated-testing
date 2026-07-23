Feature: New user Sign up

# Gherkin instructions - features

Background:
    Given user is on the Sign up page

Scenario: User open Sign Up page
    Given user is on home page
    When user click on Sign up text on navigation bar
    Then user is redirected to Sign up page

Scenario: User switch from Sign up to Sign in by tap on link
    When user click on the Have an account link
    Then user is redirected to Sign in page


Scenario: Disabled Sign up button
    And input fields for credentials are empty
    Then sign up button is disabled

Scenario: Enabled Sign up button
    And user fill in credentials with valid data
    Then sign up button is enabled


Scenario: User successfully Sign Up with valid credentials
    When user enters valid signup credentials
    And user click sign up button
    Then user is redirected to home page and have username displayed


Scenario: User see error message for invalid Username
    When user enter credentials with invalid username value
    And user click sign up button
    Then error message about invalid username is shown


Scenario: User see error message for invalid Email
    When user enter credentials with invalid email value
    And user click sign up button
    Then error message about invalid email is shown


Scenario: User see error message for invalid Password
    When user enter credentials with invalid password value
    And user click sign up button
    Then error message about invalid password is shown


Scenario: User see all error messages for all invalid credentials together
    When user enter credentials with all invalid values
    And user click sign up button
    Then all three error messages are shown
