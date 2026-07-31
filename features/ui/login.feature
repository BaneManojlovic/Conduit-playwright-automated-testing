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