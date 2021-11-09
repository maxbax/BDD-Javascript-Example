# Javascript BDD Test

An example for parsing and testing a site with BDD (Behavior-Driven Development) using [Cucumber](https://cucumber.io/) and [Selenium](https://www.seleniumhq.org/).

## Features

BDD uses the natural language to describe tests:

        Scenario: Finding some cheese
            Given I am on the Github search page
            When I search for "cheese"
            And I wait for 3 seconds
            Then the page title should contains the word "cheese"


## Execute scenarios

    npm start

