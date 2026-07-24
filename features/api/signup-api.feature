Feature: New user Sign up API testing


Scenario: Successfull sign up via API using valid credentials
    When user signs up via API with valid credentials
    And the response status is 201
    Then the response contains a new user token

Scenario: Error returned for all invalid credentials together
    When user try to signs up via API with all invalid credentials
    And the response status is 422
    Then the response contains error messages

Scenario: Error returned for invalid username
    When user try to signs up via API with invalid username
    And the response status is 422
    Then the response contains error invalid username message

Scenario: Error returned for invalid email
    When user try to signs up via API with invalid email
    And the response status is 422
    Then the response contains error invalid email message

Scenario: Error returned for invalid password
    When user try to signs up via API with invalid password
    And the response status is 422
    Then the response contains error invalid password

Scenario: Sign up via API fails with already-used username
    Given user signs up via API with valid credentials
    And the response status is 201
    When user signs up via API with credentials with repeated username
    And the response status is 422
    Then the response contains error username taken


Scenario: Sign up via API fails with already-used email
    Given user signs up via API with valid credentials
    And the response status is 201
    When user signs up via API with credentials with repeated email
    And the response status is 422
    Then the response contains error email taken