Feature: User Profile page UI testing

# Gherkin instructions - features

Background:
    Given user is on home page
    And user is logged in and have username displayed

Scenario: User opens profile page
    When user click on username link on navigation bar
    Then user is redirected to Profile page

Scenario: User enters to edit profile settings
    When user click on username link on navigation bar
    And user click on Edit Profile Settings button
    Then user is redirected to Settings page

Scenario: User logouted successfully from your settings screen
    When user click on username link on navigation bar      
    And user click on Edit Profile Settings button
    When user is currently redirected to Settings page
    And user click on logout button
    Then user is redirected to Home page and have no username displayed

Scenario: User successfully edited profile
    When user click on username link on navigation bar      
    And user click on Edit Profile Settings button
    When user is currently redirected to Settings page
    And user edited bigraphy input field
    When user click on update settings button
    And user is redirected to Profile page
    Then user see updated bio text on the Profile page
