Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: Finding some cheese
    Given I am on the Github search page
    When I search for "cheese"
    And I wait for 3 seconds
    Then the page title should contains the word "cheese"