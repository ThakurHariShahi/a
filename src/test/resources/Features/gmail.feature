
Feature: Reset functionality on login page of Application 

Background: Setting up the driver
	Given I set up the driver

   @Login
  Scenario Outline: Verifying the login page
    Given I open chrome and launch the gmail
    When I  enter the <username> and <password>
    And I click on the login button
    Then I validate gmail inbox page for <username>
		Examples: 
      | username 					| password | 
      | thakurharishahi   |     HARIgmail275275    | 
    Given I check the number of mail in the inbox 
    When I click on the first mail
    Then I validate the inbox message no reduced  
  @Inbox
  Scenario: Verifying the inbox
    