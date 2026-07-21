Feature: New user Sign up

# Gherkin instructions - features

Scenario: User open Sign Up page
    Given user is on home page
    When user click on Sign up text on navigation bar
    Then user is redirected to Sign up page

Scenario: User switch from Sign up to Sign in by tap on link
    Given user is on the Sign up page
    When user click on the Have an account link
    Then user is redirected to Sign in page


Scenario: Disabled Sign up button
    Given user is on the Sign up page
    And input fields for credentials are empty
    Then sign up button is disabled

Scenario: Enabled Sign up button
    Given user is on the Sign up page
    And user fill in credentials with valid data
    Then sign up button is enabled


# Scenario: User successfully Sign Up with valid credentials
#     Given 
#     When
#     Then 


# Scenario: User see error message for invalid Username
#     Given 
#     When
#     Then 


# Scenario: User see error message for invalid Email
#     Given 
#     When
#     Then 


# Scenario: User see error message for invalid Password
#     Given 
#     When
#     Then 


# Scenario: User see all error messages for all invalid credentials together
#     Given 
#     When
#     Then 


# Scenario: User see error if signing up with a username that's already taken
#     Given 
#     When
#     Then 

# Scenario: User see error if signing up with a email that's already taken
#     Given 
#     When
#     Then
