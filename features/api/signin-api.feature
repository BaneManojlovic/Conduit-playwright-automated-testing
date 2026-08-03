Feature: New user Sign in API testing

Scenario: Successfull sign in via API using valid credentials
    When user sign in via API with valid credentials
    And the response status is 200
    Then the user contains valid user token

Scenario: Error returned for all sign in invalid credentials together
    When user try to signs in via API with all invalid credentials
    And the response status is 403
    Then the response contains error message

Scenario: Error returned for invalid email
    When user try to signs in via API with invalid email
    And the response status is 403
    Then the response contains error message

Scenario: Error returned for invalid password
    When user try to signs in via API with invalid password
    And the response status is 403
    Then the response contains error message