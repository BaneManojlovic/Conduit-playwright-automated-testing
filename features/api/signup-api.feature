
#Senario list — mirror what you already validated on the UI, 
#... but assert on status codes/JSON instead of DOM:

# Successful signup → 201, response contains a token
# Missing/invalid username, email, password → 422 with the matching error message (you already know the exact strings from your UI work)
# Duplicate username / duplicate email → 422 — and this is actually easier at the API layer than the UI one you just got stuck on, 
#...since there's no login-state/logout dance to worry about; 
#...just call signUp() twice with the same username in the same test.


Feature: New user Sign up API testing


Scenario: Successfull sign up via API using valid credentials
    When user signs up via API with valid credentials
    And the response status is 201
    Then the response contains a new user token

Scenario: Error returned for all invalid credentials together
    Given
    When
    Then

Scenario: Error returned for invalid username
    Given
    When
    Then

Scenario: Error returned for invalid email
    Given
    When
    Then

Scenario: Error returned for invalid password
    Given
    When
    Then

Scenario: Sign up via API fails with already-used username
    Given
    When
    Then


Scenario: Sign up via API fails with already-used email
    Given
    When
    Then