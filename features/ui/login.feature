Feature: Conduit Authentication

  Scenario: Successful login with existing user credentials
    Given I open the Conduit landing page
    When I navigate to the sign-in page
    And I submit my email "conduit@dirksonline.net" and password "qB85R86#ZMKME$jVEVq#vJMDr*A!cJk"
    Then I should be logged in and see my feed tabs
